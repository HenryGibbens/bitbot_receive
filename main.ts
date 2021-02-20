input.onButtonPressed(Button.A, function () {
    radio.sendString("start")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendString("let")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Right")
    basic.showArrow(ArrowNames.West)
})
radio.setGroup(123)
