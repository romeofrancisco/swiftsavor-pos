from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Role(models.TextChoices):
        admin = 'Admin'
        manager = 'Manager'
        employee = 'Employee'

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, unique=True)
    role = models.CharField(choices=Role, default=Role.employee, max_length=10)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def save(self, *args, **kwargs):
        if self.role == self.Role.admin:
            self.is_superuser = True
            self.is_staff = True
        else:
            self.is_superuser = False
        
        super().save(*args, **kwargs)
