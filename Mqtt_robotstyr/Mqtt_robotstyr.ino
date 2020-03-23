#include <EspMQTTClient.h>
#include <Servo.h>

Servo servo;
#define motorspeed 5
#define motordir 0

void onConnectionEstablished();

EspMQTTClient client(
 "DOVADO-109bc",           
  "pggphpij",           
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
  servo.attach(14);
  pinMode(motorspeed, OUTPUT);
  pinMode(motordir, OUTPUT);
  Serial.begin(115200);
}
void Riktning(int val){
  analogWrite(motordir, val);
}
void Hastighet(int val){
  analogWrite(motorspeed, val);
}
void Angle(int val){
  servo.write(val);
}
void onConnectionEstablished()
{
  client.subscribe("edvin.vare@abbindustrigymnasium.se/ttmotor", [] (const String &payload){
   Serial.println(payload);
   int Direc= payload.substring(1, payload.indexOf(',')).toInt();
   int Speed= payload.substring(payload.lastIndexOf(',') + 1).toInt();
   analogWrite(motorspeed, Speed);
   digitalWrite(motordir, Direc);
   });
  client.subscribe("edvin.vare@abbindustrigymnasium.se/servo", [] (const String &payload){
   Serial.println(payload);
   int Angle = payload.toInt();
   servo.write(Angle);
   });
}
void loop() {
client.loop();
}
