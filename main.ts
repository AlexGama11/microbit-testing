function SOSRadioGroup() {
    
    radio.setGroup(BluetoothGroup)
    BluetoothGroup += 1
    if (BluetoothGroup == 20) {
        BluetoothGroup = 0
    }
    
}

radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    basic.clearScreen()
    basic.showNumber(receivedNumber)
    basic.showString("" + ("" + radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    Radio()
    Number2 = 0
})
function Shapes() {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.LeftTriangle)
    basic.showIcon(IconNames.Pitchfork)
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    music.playMelody("C5 B A G G A B C5 ", 120)
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showString("" + ("" + radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.clearScreen()
    Shapes()
    Number2 = 0
    Bluetooth = false
})
function Radio() {
    radio.sendString("Hello World!")
    basic.showString("Message Sent!")
}

input.onGesture(Gesture.ThreeG, function on_gesture_three_g() {
    
    basic.clearScreen()
    Number2 = 0
    Bluetooth = true
    radio.sendNumber(randint(0, 100))
    basic.showIcon(IconNames.Skull)
})
let Bluetooth = false
let BluetoothGroup = 0
let Number2 = 0
radio.setGroup(1)
basic.showString("Hi!")
Number2 = 0
basic.forever(function on_forever() {
    
    if (!Bluetooth) {
        Number2 += 1
        basic.showNumber(Number2)
    }
    
    while (input.lightLevel() <= 30) {
        Bluetooth = true
        radio.sendString("SOS")
        basic.showLeds(`
            . . # . .
                        . . # . .
                        . . # . .
                        . . . . .
                        . . # . .
        `)
        basic.clearScreen()
        SOSRadioGroup()
        if (input.lightLevel() > 30) {
            radio.sendString("Safe!")
            break
        }
        
    }
})
