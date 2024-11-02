from rest_framework import serializers
from ..models import OrderProduct, Payment, Transaction

class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = ['product','quantity','total']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['amount','change']

class TransactionSerializer(serializers.ModelSerializer):
    orders = OrderProductSerializer(many=True)
    payment = PaymentSerializer()

    class Meta:
        model = Transaction
        fields = ['id','total','orders','payment','date']

    def create(self, validated_data):
        order_data = validated_data.pop('orders')
        payment_data = validated_data.pop('payment')

        # Create the main transaction instance
        transaction = Transaction.objects.create(**validated_data)

        # Create related OrderProduct instances
        for order in order_data:
            OrderProduct.objects.create(transaction=transaction, **order)

        # Create the related Payment instance
        Payment.objects.create(transaction=transaction, **payment_data)

        return transaction