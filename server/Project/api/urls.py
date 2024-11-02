from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
#Categories API
    path('categories', views.CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>', views.CategoryDetail.as_view(), name='category-detail'),

#Products API
    path('products', views.ProductList.as_view(), name='product-list'),
    path('products/<int:pk>', views.ProductDetail.as_view(), name='product-detail'),
    
#Transactions API
    path('transactions', views.TransactionList.as_view(), name='transaction-list'),
    path('transactions/<int:pk>', views.TransactionDetail.as_view(), name='transaction-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)