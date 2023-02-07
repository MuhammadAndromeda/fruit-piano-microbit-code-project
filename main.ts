input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Butterfly)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Cow)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
