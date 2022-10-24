radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Radio()
    Number2 = 0
    Bluetooth = true
})
function Shapes () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.LeftTriangle)
    basic.showIcon(IconNames.Pitchfork)
}
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Shapes()
    Number2 = 0
    Bluetooth = false
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showNumber(randint(0, 100))
    basic.pause(2000)
    Number2 = 0
})
function Radio () {
    radio.sendString("Hello World!")
    basic.showString("Message Sent!")
}
let Bluetooth = false
let Number2 = 0
radio.setGroup(1)
basic.showString("A:Radio, B:Shapes")
Number2 = 0
basic.forever(function () {
    if (!(Bluetooth)) {
        Number2 += 1
        basic.showNumber(Number2)
    }
})
