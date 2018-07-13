from django.db import models
from django.utils import timezone

class Temperature(models.Model):
    place_name = models.CharField(max_length=100, primary_key=True)
    place_temperature = models.CharField(max_length=100)