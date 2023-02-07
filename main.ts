let Light_up = 0
input.onButtonPressed(Button.A, function () {
    Light_up = randint(0, 5)
    if (Light_up == 0) {
        basic.showString("Are you there? ")
    } else if (Light_up) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
input.onGesture(Gesture.Shake, function () {
    Light_up = randint(0, 5)
    if (Light_up) {
        basic.showString("Hey, Tater Tot!")
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        music.setVolume(127)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
	
})
