import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

def fetch_player_count(appid):
    url = f"http://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid={appid}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data["response"]["player_count"]
    else:
        print(f"Failed to fetch player count. Status code: {response.status_code}")
        return None

appid = 578080
player_count = fetch_player_count(appid)
if player_count is not None:
    print(f"Current player count for app ID {appid}: {player_count}")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

@app.get("/api")
def read_root():
    return [{"player_count" : player_count}]
