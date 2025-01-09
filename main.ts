/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella and Maryam
 * Created on: Jan 2025
 * This program is a protype for our final project
*/

// variable
let left = 0
let right= 0

// setup
radio.setGroup(131)
basic.showIcon(IconNames.Happy)

// send
input.onButtonPressed(Button.A, function () {
    left = left + 1
    radio.sendNumber(left)
})

