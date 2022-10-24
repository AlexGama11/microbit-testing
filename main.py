def SOSRadioGroup():
    global BluetoothGroup
    radio.set_group(BluetoothGroup)
    BluetoothGroup += 1
    if BluetoothGroup == 20:
        BluetoothGroup = 0

def on_received_number(receivedNumber):
    basic.clear_screen()
    basic.show_number(receivedNumber)
    basic.show_string("" + str(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)))
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global Number2
    basic.clear_screen()
    Radio()
    Number2 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def Shapes():
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.TORTOISE)
    basic.show_icon(IconNames.LEFT_TRIANGLE)
    basic.show_icon(IconNames.PITCHFORK)

def on_received_string(receivedString):
    basic.clear_screen()
    basic.show_string(receivedString)
    basic.show_string("" + str(radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)))
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Number2, Bluetooth
    basic.clear_screen()
    Shapes()
    Number2 = 0
    Bluetooth = False
input.on_button_pressed(Button.B, on_button_pressed_b)

def Radio():
    radio.send_string("Hello World!")
    basic.show_string("Message Sent!")

def on_gesture_logo_down():
    global Number2, Bluetooth
    basic.clear_screen()
    Number2 = 0
    Bluetooth = True
    radio.send_number(randint(0, 100))
    basic.show_icon(IconNames.SKULL)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

Bluetooth = False
BluetoothGroup = 0
Number2 = 0
radio.set_group(1)
basic.show_string("Hi")
Number2 = 0

def on_forever():
    global Number2, Bluetooth
    if not (Bluetooth):
        Number2 += 1
        basic.show_number(Number2)
    while input.light_level() <= 50:
        Bluetooth = True
        radio.send_string("SOS")
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . . . .
                        . . # . .
        """)
        basic.clear_screen()
        SOSRadioGroup()
        if input.light_level() > 50:
            radio.send_string("Safe!")
            break
basic.forever(on_forever)
