from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from time import sleep


# SETUP
url = 'http://127.0.0.1:5501/html/checkout.html'
nurl = 'http://127.0.0.1:5501/html/nota.html'
option = Options()
option.headless = True
driver = webdriver.Chrome()
driver.get(url)

btn = driver.find_element(By.XPATH, '//*[@id="espelho"]')
sleep(5)

if btn.get_attribute("data-toggle") == "on":
    sleep(1)
    driver.execute_script("window.open('', '_blank');") 
    driver.switch_to.window(driver.window_handles[1]) 
    driver.get(nurl)
    sleep(1)
    from aut import arg
    arg(driver)

sleep(1000)
