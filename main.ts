basic.forever(function () {
    music.play(music.stringPlayable("G G G G C C C C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    TPBot.headlightColor(0xff0000)
    basic.pause(1000)
    TPBot.headlightColor(0x0000ff)
})
