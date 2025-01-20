input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.play(music.stringPlayable("C C D D E E C C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (input.lightLevel() < 20) {
        basic.setLedColors(0xffffff, 0xffffff, 0xffffff)
    }
    if (input.lightLevel() > 20) {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
