import requests
import time
import asyncio
import random


def GetRandomCategory():
    try:
        responce=requests.get('https://api.chucknorris.io/jokes/categories').json()
    except Exception as e:
        responce=e
    return random.choice(responce)

def GerRandomJoke(category):
    try:
        responce=requests.get(f"https://api.chucknorris.io/jokes/random?category={category}").json()
    except Exception as e:
        responce=e
    return responce["value"]



#print(GetRandomCategory())

print(GerRandomJoke(GetRandomCategory()))
