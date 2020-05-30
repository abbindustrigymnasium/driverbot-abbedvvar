window.onload = function onload() {            // When window loads it starts to connect to the MQTT-broker
    startConnect()
}

function startConnect() {
    clientID = "clientID_" + parseInt(Math.random() * 100);         //Making a random client ID
    host = 'maqiatto.com'               //Defining where the broker is hosted
    port = '8883';
    client = new Paho.MQTT.Client(host, Number(port), clientID);          //Making a client that starts to connet to the broker
    // Set callback handlers
    client.onConnectionLost = onConnectionLost;             //Defining functions for responses while connected to the broker
    client.onMessageArrived = onMessageArrived;

    client.connect({                //Login credetials used connect
        userName: "edvin.vare@abbindustrigymnasium.se",
        password: "Edvinsrobot",
        onSuccess: onConnect,           //Depending on how connection goes theres functions for handling the situation
        onFailure: onFail,
    });
}

function onFail() {             //If the connection fails it starts the connection process over until it connects
    console.log("Failed to connect!")
    startConnect()
}
let speedtopic = "edvin.vare@abbindustrigymnasium.se/ttmotor";           //Defining the different topics used for controlling the robot
let steertopic = "edvin.vare@abbindustrigymnasium.se/servo";
let musictopic = "edvin.vare@abbindustrigymnasium.se/music"

function onConnect() {                  //When connected to the broker it subscribes to the defined topics
    console.log(speedtopic, steertopic, musictopic);
    client.subscribe(speedtopic);
    client.subscribe(steertopic);
    client.subscribe(musictopic);
}

function onSendspeed() {
    let message = speed.toString();
    console.log(message);
    message = new Paho.MQTT.Message(message);
    message.destinationName = speedtopic;
    client.send(message);
}

function onSendstyr() {
    let message = styr.toString();
    console.log(message);
    message = new Paho.MQTT.Message(message);
    message.destinationName = steertopic;
    client.send(message);
}

function onSendmusik() {
    let message = Musik.toString();
    message = new Paho.MQTT.Message(message);
    message.destinationName = musictopic;
    client.send(message);
}

function onConnectionLost(responseObject) {
    console.log("Connection lost!");
    startConnect();
}

function onMessageArrived(message) {
    console.log("Sent: " + message.payloadString);
}