window.onload = function exampleFunction() {

    startConnect()
}

function startConnect() {
    // Generate a random client ID
    clientID = "clientID_" + parseInt(Math.random() * 100);

    // Fetch the hostname/IP address and port number from the form
    host = 'maqiatto.com'
    port = '8883';
    client = new Paho.MQTT.Client(host, Number(port), clientID);
    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({
        userName: "edvin.vare@abbindustrigymnasium.se",
        password: "Edvinsrobot",
        onSuccess: onConnect,
        onFailure: onFail,
    });
}

function onFail() {
    console.log("Failed to connect!")
    startConnect()
}
let topic = "edvin.vare@abbindustrigymnasium.se/ttmotor";
let topic2 = "edvin.vare@abbindustrigymnasium.se/servo";
let topic3 = "edvin.vare@abbindustrigymnasium.se/music"

function onConnect() {
    console.log(topic, topic2, topic3);
    client.subscribe(topic);
    client.subscribe(topic2);
    client.subscribe(topic3);
}

function onSendspeed() {
    let message = speed.toString();
    console.log(message);
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic;
    client.send(message);
}

function onSendstyr() {
    let message = document.getElementById("Servo").value;
    console.log(message);
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic2;
    client.send(message);
}

function onSendmusik() {
    let message = Musik.toString();
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic3;
    client.send(message);
}

function onConnectionLost(responseObject) {
    console.log("Connection lost!");
    startConnect();
}

function onMessageArrived(message) {
    console.log("Sent: " + message.payloadString);
}