import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
from .models import Temperature
import json

def get_temperatures_and_save_to_db():
    with urllib.request.urlopen('http://www.koreawqi.go.kr/wQSCHomeLayout_D.wq?action_type=T') as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        div_timetable = soup.find("div", {"class": "timetable"})
        div_layer_btn1_r1 = div_timetable.find('div', {"id": "div_layer_btn1_r1"})
        table = div_layer_btn1_r1.find('table')
        rows = table.find_all('tr')

        temperatures = {}
        for row in rows:
            river_name = row.find('th').text
            cols = row.find_all('td')
            if cols[0].text == u'\xa0':
                temperatures[river_name] = '모르겠'
            else:
                temperatures[river_name] = cols[0].text

        Temperature.objects.all().delete()

        for element in temperatures.items():
            Temperature(place_name=element[0], place_temperature=element[1]).save()

