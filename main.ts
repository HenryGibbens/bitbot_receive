input.onButtonPressed(Button.A, function () {
    radio.sendString("forklift up")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("up")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("let")
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("stop")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("forklift down")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("start")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("down")
    basic.showArrow(ArrowNames.South)
})
radio.setGroup(123)
