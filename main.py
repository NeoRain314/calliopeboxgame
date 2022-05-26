def on_button_pressed_a():
    drawPoint(2, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def drawPoint(x: number, y: number):
    led.plot(x, y)
x = 0
y = 0

def on_forever():
    pass
basic.forever(on_forever)
