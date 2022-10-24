input.onButtonPressed(Button.A, function () {
    Radio()
})
function Shapes () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.LeftTriangle)
    basic.showIcon(IconNames.Pitchfork)
}
input.onButtonPressed(Button.B, function () {
    Shapes()
})
function Radio () {
    radio.setGroup(1)
    radio.sendString("Hello World!")
}
basic.showString("A:Radio, B:Shapes")
basic.forever(function () {
	
})
