from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50 ,blank=False)
    image = models.ImageField(upload_to='categories')
    created = models.DateTimeField(auto_now_add=True)
    isActive = models.BooleanField(default=True, null=False)

class Product(models.Model):
    name = models.CharField(max_length=50 ,blank=False)
    image = models.ImageField(upload_to='products')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    isActive = models.BooleanField(default=True, null=False)

class Transaction(models.Model):
    total = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

class OrderProduct(models.Model):
    transaction = models.ForeignKey(Transaction, related_name='orders', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=0)

class Payment(models.Model):
    transaction = models.OneToOneField(Transaction, related_name='payment', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    change = models.DecimalField(max_digits=10, decimal_places=2)

