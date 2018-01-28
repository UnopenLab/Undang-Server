# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import json


# Create your views here.
def get_temperatures_by_json(request):
    with urllib.request.urlopen('http://www.koreawqi.go.kr/wQSCHomeLayout_D.wq?action_type=T') as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        div_timetable = soup.find("div", {"class": "timetable"})
        div_layer_btn1_r1 = div_timetable.find('div', {"id": "div_layer_btn1_r1"})
        table = div_layer_btn1_r1.find('table')
        rows = table.find_all('tr')

        temperatures = {}
        for row in rows:
            cols = row.find_all('td')
            if cols[1].text == u'\xa0':
                temperatures[cols[0].text] = '모르겠'
            else:
                temperatures[cols[0].text] = cols[1].text
        return HttpResponse(json.dumps(temperatures, ensure_ascii=False), content_type='application/json; charset=utf-8')


def post_index(request):
    return render(request, 'main/index.html', {})
