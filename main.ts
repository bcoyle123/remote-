input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
basic.showLeds(`
    # . # . #
    . # . # .
    # # # # #
    . # # # .
    . . . . .
    `)
radio.setGroup(2)
basic.forever(function () {
    radio.sendValue("y", input.acceleration(Dimension.X))
    radio.sendValue("x", input.acceleration(Dimension.Y))
})
