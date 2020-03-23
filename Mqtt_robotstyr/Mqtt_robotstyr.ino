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

void onConnectionEstablished()
{
  client.subscribe("edvin.vare@abbindustrigymnasium.se/ttmotor", [] (const String &payload){
   int Speed= payload.toInt();
   if(Speed<0){
    int Backa = Speed-Speed-Speed;
    analogWrite(motorspeed, Backa);
    digitalWrite(motordir, 0);
    Serial.println(Backa);
   }    
   else if(Speed>0){
    analogWrite(motorspeed, Speed);
    digitalWrite(motordir, 1);        
   }
   else{
    analogWrite(motorspeed, 0);
   }

   Serial.println(Speed);
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
