def on_button_a():
    global Alarm
    music.play(music.string_playable("B F A - B F A - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.pause(1000)
    Alarm = 1
    motors.dual_motor_power(Motor.M0, 100)
    basic.pause(5000)
    motors.dual_motor_power(Motor.M0, -100)
    Alarm = 0
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_melody_started():
    for index in range(2):
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            """)
        basic.show_leds("""
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
music.on_event(MusicEvent.MELODY_STARTED, on_melody_started)

Alarm = 0
Alarm = 1
basic.pause(2000)
Alarm = 0

def on_forever():
    if input.light_level() > 80:
        if Alarm == 0:
            music.play(music.string_playable("C5 E C5 - C5 E C5 - ", 150),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.string_playable("C5 E C5 - C5 E C5 - ", 150),
                music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
