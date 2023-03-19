input.onPinPressed(TouchPin.P0, function () {
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("ZAPLATTE 10 KC")
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    basic.showString("VODA")
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("LED")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("ZAPLATTE 10 KC")
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(349, music.beat(BeatFraction.Double))
    basic.showString("VODA")
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showString("LED")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    basic.showString("VODA")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showString("ZAPLACENO")
})
