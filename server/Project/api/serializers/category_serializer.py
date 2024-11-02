from rest_framework import serializers
from ..mixins import UpdateIsActiveMixin
from ..models import Category

class CategorySerializer(UpdateIsActiveMixin, serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name','image','created']