# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import render
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import json
from .models import Temperature


# Create your views here.
def get_temperatures_by_json(request):
    queryset = Temperature.objects.all()

    temperatures = {}
    for info in queryset:
        temperatures[info.place_name] = info.place_temperature

    return HttpResponse(json.dumps(temperatures, ensure_ascii=False), content_type='application/json')


def post_index(request):
    return render(request, 'main/index.html', {})
