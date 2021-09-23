input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
        }
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, Y)
        basic.pause(200)
    }
}
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
