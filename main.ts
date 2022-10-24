input.onButtonPressed(Button.A, function () {
    Radio()
})
function Shapes () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.LeftTriangle)
    basic.showIcon(IconNames.Pitchfork)
}
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Shapes()
})
function Radio () {
    radio.sendString("Hello World!")
    basic.showString("Message Sent!")
}
radio.setGroup(1)
basic.showString("A:Radio, B:Shapes")
let Number2 = 0
basic.forever(function () {
    Number2 += 1
})
