input.onButtonPressed(Button.A, function () {
    music.setTempo(49)
    basic.showString("A")
    music.playTone(440, music.beat(BeatFraction.Breve))
    basic.pause(2000)
    basic.showString("E")
    music.playTone(330, music.beat(BeatFraction.Breve))
    basic.pause(2000)
    basic.showString("C")
    music.playTone(261.60, music.beat(BeatFraction.Breve))
    basic.pause(2000)
    basic.showString("G")
    music.playTone(392, music.beat(BeatFraction.Breve))
    basic.clearScreen()
})
