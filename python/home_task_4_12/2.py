import requests
import time
import asyncio
import random



def GetUserInputCity():
    print("Hello! This program will print weather data in your city")
    local_city = input("Please enter your city name: ")
    return local_city

def GetWeatherInCity(local_city):
    try:
        responce = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={local_city}&appid=10502fcf40c62fef835418b37164ade7")
        if responce.status_code == 200: #if not responce.ok
            responce=responce.json()
            description = responce['weather'][0]['description']
            kelvin_temp=responce['main']['temp']
            celsius_temp=kelvin_temp-273.15
            answer=f"Weather description: {description}\n temperature: {kelvin_temp}\n celsius temperature: {celsius_temp}"
            return answer
        elif responce.status_code == 404:
            print("City not found")
            return None
        else:
            print("Unexpected answer")
            return None
    except Exception as e:
        print(e)




"""main"""

print(GetWeatherInCity(GetUserInputCity()))