import requests
import time
import asyncio
import random


def GetRandomCategory():
    responce=requests.get('https://api.chucknorris.io/jokes/categories').json()
    return random.choice(responce)

def GerRandomJoke(category):
    responce=requests.get(f"https://api.chucknorris.io/jokes/random?category={category}").json()
    return responce["value"]



#print(GetRandomCategory())

print(GerRandomJoke(GetRandomCategory()))
