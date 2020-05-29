var even = 0;
var switchon = 0;
var speed = 0;
var styr = 0;
var gyroactive = false;

window.addEventListener('deviceorientation', function (event) {
    var show = document.getElementById("plsrotate");
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    if (event.absolute != false) {
        document.getElementById("gyroswitch").style.display = "block"
        if (gyroactive == true) {
            if (orientation === "landscape-primary") {
                show.style.display = "none";
                speed = (45 - event.gamma) / 0.00004291534423828125;
                onSendspeed();
                styr = (45 + event.beta) / 0.5;
                onSendstyr();
            } else if (orientation === "landscape-secondary") {
                show.style.display = "none";
                speed = -(45 - event.gamma) / 0.00004291534423828125;
                onSendspeed();
                styr = -(45 + event.beta) / 0.5;
                onSendstyr();
            } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
                show.style.display = "block";
            }
        }
    }


});

function gyroactivate() {
    /*if(document.getElementById("gyroswitch") == "Gyrostyrning: AV"){
       document.getElementById("gyroswitch").style.backgroundColor = "green"
       document.getElementById("gyroswitch") = "Gyrostyrning: PÅ"
       gyroactive = true
    }
    else if(document.getElementById("gyroswitch") == "Gyrostyrning: PÅ"){
        document.getElementById("gyroswitch").style.backgroundColor = "white"
        document.getElementById("gyroswitch") = "Gyrostyrning: AV"
        gyroactive = false
    }*/
    if (switchon % 2 == 0) {
        document.getElementById("gyroswitch").style.backgroundColor = "green"
        document.getElementById("gyroswitch").innerHTML = "Gyrostyrning: PÅ"
        gyroactive = true
    } else {
        document.getElementById("gyroswitch").style.backgroundColor = "white"
        document.getElementById("gyroswitch").innerHTML = "Gyrostyrning: AV"
        gyroactive = false
    }
    switchon++;
}

function infosquare() {
    document.getElementById("info").style.display = "block";
}

function closeinfo() {
    document.getElementById("info").style.display = "none";
}

function funcspeed() {
    speed = document.getElementById("Speed").value;
    console.log(speed);
    onSendspeed();
}

function funcstyr() {
    styr = document.getElementById("Servo").value;
    onSendstyr();
}

function funcreset() {
    document.getElementById("Servo").value = 90;
    document.getElementById("Speed").value = 0;
    speed = 0;
    onSendspeed();
    onSendstyr();
}

function musik() {
    if (even % 2 == 0) {
        var music = 1;
        Musik = music
        onSendmusik();
    } else {
        var music = 0;
        Musik = music
        onSendmusik();
    }
    even++;
}