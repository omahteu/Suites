from pyautogui import press, keyDown, keyUp
from time import sleep


def arg(driver):
    keyDown("win")
    sleep(1)
    press("right")
    sleep(1)
    press("right")
    sleep(1)
    press("right")
    sleep(1)
    press("right")
    sleep(1)
    press("up")
    sleep(1)
    keyUp("win")
    sleep(1)
    driver.quit()
