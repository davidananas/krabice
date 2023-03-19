input.onPinPressed(TouchPin.P0, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("ZAPLATTE 10 KC")
})
input.onButtonPressed(Button.A, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString("VODA")
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    basic.showString("LED")
    basic.clearScreen()
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("ZAPLATTE 10 KC")
})
input.onButtonPressed(Button.AB, function () {
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
    basic.clearScreen()
    basic.showString("VODA")
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showString("ZAPLACENO")
})
