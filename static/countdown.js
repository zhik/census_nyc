'use strict'

var days_until = document.getElementById('days-until')
var countDownDate = new Date('April 1, 2020').getTime()
var now = new Date().getTime()
var distance = countDownDate - now
var days = Math.floor(distance / (1000 * 60 * 60 * 24))
days_until.innerText = days
