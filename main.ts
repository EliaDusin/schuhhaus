input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Alarmton = 1
    basic.setLedColor(0xff8000)
    music.play(music.stringPlayable("C C D D E E C C ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    Alarm = 1
    basic.setLedColor(0x00ff00)
    basic.pause(5000)
    basic.setLedColor(0xff0000)
    Alarmton = 0
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    if (Alarmton == 0) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Alarm = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Alarm = 0
})
let Alarm = 0
let Alarmton = 0
basic.setLedColor(0xff0000)
Alarmton = 0
Alarm = 1
basic.forever(function () {
    if (Alarm == 0) {
        if (input.lightLevel() > 120) {
            music.play(music.stringPlayable("C5 E C5 - C5 E C5 - ", 150), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("C5 E C5 - C5 E C5 - ", 150), music.PlaybackMode.UntilDone)
        }
    }
})
