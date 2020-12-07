from django.conf import settings
from django.db import models


class Userss(models.Model):
    "Generated Model"
    username = models.CharField(
        max_length=200,
    )
    email = models.EmailField(
        max_length=254,
    )
    password = models.CharField(
        max_length=200,
    )
    password_hash = models.CharField(
        max_length=200,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )


# Create your models here.
