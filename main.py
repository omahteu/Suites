from requests import delete

for c in range(0, 300):
    delete(f"https://demomotelapi.herokuapp.com/caixa/{c}")