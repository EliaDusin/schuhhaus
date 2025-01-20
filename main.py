def on_button_a():
    music.play(music.string_playable("C C D D E E C C ", 120),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_forever():
    if input.light_level() < 20:
        basic.set_led_colors(0xffffff, 0xffffff, 0xffffff)
    if input.light_level() > 20:
        basic.set_led_colors(0x000000, 0x000000, 0x000000)
basic.forever(on_forever)
