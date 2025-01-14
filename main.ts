
/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella and Maryam
 * Created on: Jan 2025
 * This program is a protype for our final project
*/

let left = 1
let right = 0

radio.setGroup(131)
basic.showIcon(IconNames.Happy)

// send left
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(left)
})

// send right
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(right)
})
