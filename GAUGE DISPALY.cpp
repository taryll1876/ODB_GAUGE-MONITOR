#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1106_128X64_NONAME_1_HW_I2C u8g2(U8G2_R2);

int boostPressure;
int boostMax = 0;
int boostMin = 0;

bool flashTracker = false;

unsigned long startMillis;
unsigned long currentMillis;
const unsigned long period = 50;

const int sensorHistoryLength = 128;
int sensorHistory[sensorHistoryLength];
int sensorHistoryPos = sensorHistoryLength - 1;

void setup(void) {
  u8g2.begin();
  startMillis = millis();
}

void loop(void) {
  currentMillis = millis();
  if (currentMillis - startMillis >= period) {
    readSensorData();
    flashTracker = !flashTracker;
    startMillis = currentMillis;
  }

  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_fub20_tf);
    char cstr[6];
    dtostrf((float)boostPressure / 100, 1, 1, cstr);
    u8g2.drawStr(0, 20, cstr);

    u8g2.setFont(u8g2_font_fub11_tf);
    char indicator[4];
    if (boostPressure < 7000) {
      // IDLE
      strcpy(indicator, "IDLE");
    } else if (boostPressure < 11000) {
      // NORMAL
      strcpy(indicator, "NORMAL");
    } else {
      // HIGH
      strcpy(indicator, "HIGH");
    }
    int yPos = u8g2.getStrWidth(indicator);
    u8g2.drawStr(128 - yPos, 11, indicator);

    drawBarGraph(0, 22, 128, 8);
    drawGraph(0, 32, 128, 31);

  } while ( u8g2.nextPage() );
}

float normaliseSensorData(int m) {
  /*
    Scale the sensor reading into range
    m = measurement to be scaled
    rmin = minimum of the range of the measurement
    rmax = maximum of the range of the measurement
    tmin = minimum of the range of the desired target scaling
    tmax = maximum of the range of the desired target scaling
    normalisedValue = ((m − rmin) / (rmax − rmin)) * (tmax − tmin) + tmin
    https://stats.stackexchange.com/a/281164
  */

  /*
    Sensor voltage ranges from 0.5v to 4.5v, converted to analogRead values (0 min, 1023 max) that's 102 to 921
    rmin = 102
    rmax = 921
    Sensor reads from 0 to 140psi
    tmin = 0
    tmax = 14000

    normalisedValue = ((m − 102) / (921 − 102)) * (14000 − 0) + 0
    normalisedValue = ((m − 102) / 819) * 14000
    normalisedValue = (m − 102) / 0.1708
  */
  
  return (m - 102) / 0.1708;
}

void readSensorData(void) {
  float absolutePressure = normaliseSensorData(analogRead(A0));
  
  // Subtract 14.7 psi == pressure at sea level
  boostPressure = absolutePressure - 1470;
  
  // Oil pressure should never be negative
  if (boostPressure < 0) boostPressure = 0;

  // Update max and min
  if (boostPressure > boostMax) boostMax = boostPressure;
  if (boostPressure < boostMin) boostMin = boostPressure;

  // Log the history
  addSensorHistory(boostPressure);
}

void addSensorHistory(int val) {
  sensorHistory[sensorHistoryPos] = val;
  sensorHistoryPos--;
  if (sensorHistoryPos < 0) sensorHistoryPos = sensorHistoryLength - 1;
}

int getSensorHistory(int index) {
  index += sensorHistoryPos;
  if (index >= sensorHistoryLength) index = index - sensorHistoryLength;
  return sensorHistory[index];
}

void drawGraph(int x, int y, int len, int height) {
  drawHorizontalDottedLine(x, y, len);
  drawHorizontalDottedLine(x, y + height, len);

  int absMin = abs(boostMin);
  int range = absMin + boostMax;

  int zeroYPos = mapValueToYPos(absMin, range, y, height);
  drawHorizontalDottedLine(x, zeroYPos, len);

  for (int i = 0; i < 128; i++) {
    int valueY = getSensorHistory(i) + absMin;

    int yPos = mapValueToYPos(valueY, range, y, height);
    int xPos = len - i;
    if (yPos < zeroYPos) {
      u8g2.drawVLine(xPos, yPos, zeroYPos + 1 - yPos);
    } else {
      u8g2.drawPixel(xPos, yPos);
    }
  }
}

void drawBarGraph(int x, int y, int len, int height) {
  if (boostPressure > 0) {
    int barLength = ((float)boostPressure / boostMax) * len;
    u8g2.setDrawColor(2);
    u8g2.drawBox(x, y, barLength, height);
    u8g2.setDrawColor(1);
  }
}

int mapValueToYPos(int val, int range, int y, int height) {
  float valueY = ((float)val / range) * height;
  return y + height - (int)valueY;
}

void drawHorizontalDottedLine(int x, int y, int len) {
  for (int i = 0; i < len; i++) {
    if (!(i % 4)) u8g2.drawPixel(x + i, y);
  }
}
