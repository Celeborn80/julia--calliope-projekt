let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
