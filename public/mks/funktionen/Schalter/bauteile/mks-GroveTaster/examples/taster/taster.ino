const int tasterPin = 2;

void setup() {
    Serial.begin(115200);
    pinMode(tasterPin, INPUT);
    delay(10);
}

void loop() {
    Serial.println(digitalRead(tasterPin));
    delay(500);
}
