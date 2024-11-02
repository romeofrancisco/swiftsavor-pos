from rest_framework import serializers
from ..mixins import UpdateIsActiveMixin
from ..models import Product

class ProductSerializer(UpdateIsActiveMixin, serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','name','image','category','price','stock','created']