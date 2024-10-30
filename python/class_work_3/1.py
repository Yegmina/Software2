import time
import requests


keyword= input("input keyword: ")
request="https://api.tvmaze.com/search/shows?q="+keyword
response=requests.get(request).json()
response_code=requests.get(request).status_code
while response_code!=200:
    k=2
    i=1
    time.sleep(k**i)
    request = "https://api.tvmaze.com/search/shows?q=" + keyword
    response = requests.get(request).json()
    response_code = requests.get(request).status_code
    if i>5:
        break
try:
    print(response[0]['show']['name'])
    print(response_code)
except:
    if response_code!=200:
        print("response code: ", response_code)
        print("server is not answering")
        exit()

    print("Film is not found")
