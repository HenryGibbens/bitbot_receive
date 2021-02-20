input.onButtonPressed(Button.A, function () {
    radio.sendString("forklift up")
    basic.showArrow(ArrowNames.SouthEast)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("start")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendString("let")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.No)
    radio.sendString("stop")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Ghost)
    radio.sendString("forklift stop")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.NorthEast)
    radio.sendString("forklift down")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("back")
})
radio.setGroup(123)
