var even = 0; //Defining the different variables used in this file
var switchon = 0;
var speed = 0;
var styr = 0;
var prevstyr = 90;
var prevspeed = 0;
var gyroactive = false;

window.addEventListener('deviceorientation', function gyro(event) { //Adding a window listener to detect the phones gyroscopic details
    var show = document.getElementById("plsrotate");
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation; //Defining a variable that stores the info about wich screenmode the phone is in
    //if (parseInt(event.alpha) > 0) { // Because a computer doesnt have a gyro it tests if the x-plane (alpha) has a value
        if (orientation === "portrait-secondary" || orientation === "portrait-primary") {           //if the phone is in portrait mode it asks the user to rotate it so it can start
            show.style.display = "block";                   
            document.getElementById("gyroswitch").style.display = "none"
        } else {
            document.getElementById("gyroswitch").style.display = "block"           //displaying a button that turns on/off the gyrosteering
            show.style.display = "none";
        }
        if (gyroactive == true) {           //if the button is on then this if-case gets executed

            speed = 1048576 - (23301 * parseInt(event.gamma));        //calculating the speedvalue based on the angle the phone is tilted forward
            if (speed != document.getElementById("gyrospeed").innerHTML && speed <= 1048576) {        //Making sure the value hasn´t been sent already and that it is within the approved valuewindow 
                document.getElementById("gyrospeed").innerHTML = speed;
                document.getElementById("Speed").value = speed;         //Making the sliders respond to the gyrovalues
                onSendspeed();           //Executes the sendfunction to send to the broker
            }

            styr = parseInt(event.beta) * -3 + 90;          //calculating the steervalue depending on the phones tilt sideways
            if (styr != document.getElementById("gyrostyr").innerHTML && styr >= 0 && styr <= 180) {
                document.getElementById("gyrostyr").innerHTML = styr;
                document.getElementById("Styr").value = styr;
                onSendstyr();
            }
        }
  //  }
});

function gyroactivate() {           //when the gyroswitch is pressed this function executes
    if (switchon % 2 == 0) {            //Each time the switch gets pressed it changes vlue depending on if the click is an even or an uneven time
        document.getElementById("gyroswitch").style.backgroundColor = "#3af700"         //changing the apperance of the switch
        document.getElementById("gyroswitch").innerHTML = "Gyrostyrning: PÅ"
        gyroactive = true               //activating the gyrosteering
    } else {
        document.getElementById("gyroswitch").style.backgroundColor = "white"
        document.getElementById("gyroswitch").innerHTML = "Gyrostyrning: AV"
        gyroactive = false
    }
    switchon++;             //counter for tracking how many clicks thats been done
}

function infosquare() {
    document.getElementById("info").style.display = "block";        //if clicking the infobutton this funtion shows the infosquare
}

function closeinfo() {
    document.getElementById("info").style.display = "none";         //when the back button in the infosquare it closes the square with this function
}

function funcspeed() {
    speed = document.getElementById("Speed").value;                 //taking the value from the slider and sending it to the broker via the send function
    onSendspeed();
}

function funcstyr() {
    styr = document.getElementById("Servo").value;
    onSendstyr();
}

function funcreset() {              //if the header is pressed it resets the sliders with this one
    document.getElementById("Servo").value = 90;        //setting the new slider values
    document.getElementById("Speed").value = 0;
    speed = 0;          //sending the reset values to MQTT
    styr = 90;
    onSendspeed();
    onSendstyr();
}

function musik() {              //same type of function as ln 37 but this executes when the shark image is clicked
    if (even % 2 == 0) {
        var music = 1;
        Musik = music           //and it controlls the music of the robot when clicked
        onSendmusik();
    } else {
        var music = 0;
        Musik = music
        onSendmusik();
    }
    even++;
}