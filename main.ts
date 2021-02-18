input.onButtonPressed(Button.A, function () {
    radio.sendString("Start")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
radio.setGroup(123)
basic.forever(function () {
	
})
