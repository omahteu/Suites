from requests import delete

for c in range(0, 40):
    delete(f"https://demomotelapi.herokuapp.com/atividade/{c}")