from requests import delete

for c in range(0, 220):
    delete(f"https://demomotelapi.herokuapp.com/pagamento/{c}")