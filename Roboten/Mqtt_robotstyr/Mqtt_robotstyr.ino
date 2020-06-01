#include <EspMQTTClient.h>      //including the libraries used in the code
#include <Servo.h>

Servo servo;              
#define motorspeed 5          //Defining all the pinnames to the pins used
#define motordir 0
#define Musicpin 12

void onConnectionEstablished();       //Defining the client void to execute in the void loop

EspMQTTClient client(
  "DOVADO-109bc",     //WiFi SSID
  "pggphpij",   //WiFi Password
  "maqiatto.com",  // MQTT broker ip
  1883,             // MQTT broker port
  "edvin.vare@abbindustrigymnasium.se", // MQTT username
  "Edvinsrobot",       // MQTT password
  "Edvinhello",          // Client name
  onConnectionEstablished, // Connection established callback
  true,             // Enable web updater
  true              // Enable debug messages
);

void setup() {
  servo.attach(14);     //Defining which GPIO-pins thats being used aswell as defining them as inputs or outputs
  pinMode(motorspeed, OUTPUT);
  pinMode(motordir, OUTPUT);
  pinMode(12, OUTPUT);
  Serial.begin(115200);       //Setting up a serial monitor for the comunication port thats being used for development on the NodeMCU
}

void onConnectionEstablished()          //Describing what the void is going to do
{
  client.subscribe("edvin.vare@abbindustrigymnasium.se/ttmotor", [] (const String & payload) {      //Subscribing to the ttmotor topic on the MQTT-broker
    int Speed = payload.toInt();        //converting the payloadstring into a integer
    if (Speed < 0) {                    //if the value is below 0 it calculates values to drive in reverse
      int BRot = -Speed;     //Making the value positive
      int Backa = sqrt(BRot);        //Squarerooting the value because the value from the slider is made to be more sensitive on lower values, 
                                     //because the motor doesn´t drive lower than 500/600 out of 1024
      analogWrite(motorspeed, Backa);   //Writing the speed of the motor
      digitalWrite(motordir, 0);      //And the direction (reverse)
      Serial.println(Backa);      //printing the speed so if something is wrong you can check what the speed should be
    }
    else if (Speed > 0) {       //doing the same thing but for forward dirving 
      int FRot = sqrt(Speed);
      analogWrite(motorspeed, FRot);
      digitalWrite(motordir, 1);  //except writing the direction as forward
      Serial.println(Speed);
    }
    else {
      analogWrite(motorspeed, 0);   //And if the value isn´t comprehendable or 0 it stops
    }

    
  });
  client.subscribe("edvin.vare@abbindustrigymnasium.se/servo", [] (const String & payload) {    //Subscribing to the servotopic
    Serial.println(payload);
    int Angle = payload.toInt();
    servo.write(Angle);         //writes the value of the payload as a integer as the angle of the servo
  });
  client.subscribe("edvin.vare@abbindustrigymnasium.se/music", [] (const String & payload) {      //Subscribes to the topic of the music controll
    Serial.println(payload);
    int musicplay = payload.toInt();        
    digitalWrite(Musicpin, musicplay);        //Write the value on/off to the extarnal Arduino UNO that manages the playing of the music
  });
}
void loop() {
  client.loop();      //looping the previosly described loop
}