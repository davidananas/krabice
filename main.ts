input.onPinPressed(TouchPin.P1, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Happy)
    basic.showString("ZAPLACENO")
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showArrow(ArrowNames.West)
        basic.clearScreen()
        basic.showString("ZAPLATTE 10 KC")
    }
    while (input.buttonIsPressed(Button.B)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showArrow(ArrowNames.West)
        basic.clearScreen()
        basic.showString("ZAPLATTE 10 KC")
    }
})
