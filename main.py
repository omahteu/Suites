from requests import delete

for c in range(0, 65):
    delete(f"https://demomotelapi.herokuapp.com/faxina/{c}")