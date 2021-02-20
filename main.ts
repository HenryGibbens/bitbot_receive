input.onButtonPressed(Button.A, function () {
    radio.sendString("forklift up")
    basic.showArrow(ArrowNames.SouthEast)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("let")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.NorthEast)
    radio.sendString("forklift down")
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.NorthWest)
    radio.sendString("start")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.SouthWest)
    radio.sendString("stop")
})
radio.setGroup(123)
