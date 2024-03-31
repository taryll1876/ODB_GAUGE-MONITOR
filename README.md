


    Arduino IDE
    HTML/CSS/JavaScript editor
    Basic knowledge of Arduino programming and web development

Installation

    Clone the Repository: Clone this repository to your local machine using Git:

    bash

    git clone https://github.com/yourusername/sensor-display-project.git

    Hardware Setup: Connect your Arduino board to the sensors as per the hardware configuration specified in the documentation or code comments.

    Upload Arduino Sketch: Upload the Arduino sketch (sensor_display_controller.ino) to your Arduino board using the Arduino IDE or your preferred method.

    HTML Setup: Modify the HTML files (index.html, sensor_display.html, etc.) as needed to customize the user interface or add additional features.

    Test the System: Ensure that the Arduino board is properly connected to the sensors and that the HTML interface displays the sensor data correctly. Make any necessary adjustments to the code or hardware configuration.

Contributing

We welcome contributions from the community to improve and expand the functionality of the Sensor Display Project. If you'd like to contribute, please follow these guidelines:

    Fork the repository and create a new branch for your feature or bug fix.
    Make your changes and ensure that the code follows the project's coding standards.
    Test your changes thoroughly to ensure they work as expected.
    Submit a pull request with a clear description of your changes and their purpose.

    OBD_Gauge
A simple Arduino-powered automotive gauge to display readings from various car sensors. The readings that are currently implemented are:

Air/Fuel Ratio (AFR)
Air Intake Temperature (°F)
Oil Temperature (°F)
Battery Voltage (V)
Coolant Temperature (°F)
Fuel Pressure (kPa)
Engine RPM (rpm)
Vehicle Speed (mph)
Engine Load (%)
Throttle Position (%)
MPG and Average MPG (mpg)


DEPENDENCIES
ArduinoOBD
TaskScheduler
Adafruit SSD1306
Adafruit GFX
HARDWARE
This project uses an ESP8266 NodeMCU, a 2.42" 128*64 SPI OLED, and a Freematics OBD-II UART Adapter.

Pin RST -> Button 1 -> GND
Pin D1 (330Ohm pulldown resistor) -> Button 2 -> 3.3V
Pin D4 -> DC on OLED
Pin D5 -> SCL (SCK) on OLED
Pin D6 -> RES (MISO) on OLED
Pin D7 -> SDA (MOSI) on OLED
Pin D8 -> CS on OLED
3.3V & GND to VCC & GND on OLED
Pin TX -> RX on OBD-II UART Adapter
Pin RX -> TX on OBD-II UART Adapter
5V and GND is provided from OBD-II UART Adapter for Arduino and OLED

LIBRARY MODIFICATIONS
I found that the OBD2UART library with the ESP8266 board select Serial1 for UART communication - which, normally, would be fine BUT the SPI display uses the Serial1 pins and effectively makes the display go crazy. Therefore, Serial should be used for for UART communication - so I changed line 17 in OBD2UART.h to:

#define OBDUART Serial
I also didn't like the Adafruit splash screen on each reboot - so I removed it by deleting these lines (# 470 - 476) in Adafruit_SSD1306.cpp:

if (HEIGHT > 32) {
   drawBitmap((WIDTH - splash1_width) / 2, (HEIGHT - splash1_height) / 2,
            splash1_data, splash1_width, splash1_height, 1);
} else {
   drawBitmap((WIDTH - splash2_width) / 2, (HEIGHT - splash2_height) / 2,
            splash2_data, splash2_width, splash2_height, 1);
}