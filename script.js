var christmas_date = new Date('Dec 25, 2020 00:00:00')

function countdown() {
    var today = new Date()
    var gap = christmas_date - today

    var seconds = 1000
    var minutes = seconds * 60
    var hour = minutes * 60
    var day = hour * 24

    var d = Math.floor(gap / (day))
    var h = Math.floor((gap % (day)) / (hour))
    var m = Math.floor((gap % (hour)) / (minutes))
    var s = Math.floor((gap % (minutes)) / (seconds))

    document.getElementById("days").innerHTML = d
    document.getElementById("hours").innerHTML = h
    document.getElementById("minutes").innerHTML = m
    document.getElementById("seconds").innerHTML = s
}

setInterval(() => {
    countdown()
}, 1000)