input.onButtonPressed(Button.A, function () {
    radio.sendString("forklift up")
    basic.showArrow(ArrowNames.SouthEast)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("back")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("let")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString("fast")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("start")
})
radio.setGroup(123)
