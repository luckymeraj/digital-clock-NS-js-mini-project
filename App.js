const clock = document.querySelector(".clock");

setInterval(function() {
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';

    if (hr == 0) {
        hr = 12;
    }
    if (hr > 12) {
    
        hr = hr - 12;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }

    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});
