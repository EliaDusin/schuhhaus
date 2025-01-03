input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Alarmton = 1
    music.play(music.stringPlayable("B F A - B F A - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    Alarm = 1
    motors.dualMotorPower(Motor.M0, 100)
    basic.pause(5000)
    motors.dualMotorPower(Motor.M0, -100)
    Alarm = 0
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
let Alarm = 0
let Alarmton = 0
Alarmton = 0
Alarm = 1
basic.pause(2000)
Alarm = 0
basic.forever(function () {
    if (input.lightLevel() > 80) {
        if (Alarm == 0) {
            music.play(music.stringPlayable("C5 E C5 - C5 E C5 - ", 150), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("C5 E C5 - C5 E C5 - ", 150), music.PlaybackMode.UntilDone)
        }
    }
})
