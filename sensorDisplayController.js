document.addEventListener("DOMContentLoaded", function () {

    const mphValue = document.getElementById("mphValue");
    const gearboxPosValue = document.getElementById("gearboxPosValue");
    const waterTempValue = document.getElementById("waterTempValue");
    const batteryVoltageValue = document.getElementById("batteryVoltageValue");
    const boostPressureGraph = document.getElementById("boostPressureGraph");
    const oilPressureGraph = document.getElementById("oilPressureGraph");
    const oilTempGraph = document.getElementById("oilTempGraph");
    const coolantTempGraph = document.getElementById("coolantTempGraph");
    const boostPressureValue = document.getElementById("boostPressureValue");
        const oilPressureValue = document.getElementById("oilPressureValue");
        const oilTempValue = document.getElementById("oilTempValue");
        const coolantTempValue = document.getElementById("coolantTempValue");
        const rpmValue = document.getElementById("rpmValue");


    document.addEventListener("DOMContentLoaded", function () {


    // Update sensor values and graphs (example)
    setInterval(function () {
        // Simulate RPMs (idle between 700 and 9000 RPM)
        const rpm = Math.floor(Math.random() * 8300) + 700; // Simulated RPM range
        rpmValue.textContent = rpm;

        // Update boost pressure value and graph
        const boostPressure = Math.floor(Math.random() * 40) - 20; // Example boost pressure range from -20 psi to 20 psi
        boostPressureValue.textContent = boostPressure;

        // Update oil pressure value and graph
        const oilPressure = Math.floor(Math.random() * 100) + 10; // Example oil pressure range from 10 psi to 110 psi
        oilPressureValue.textContent = oilPressure;

        // Update oil temperature value and graph
        const oilTemp = Math.floor(Math.random() * 150); // Example oil temperature range from 0°C to 150°C
        oilTempValue.textContent = oilTemp;

        // Update coolant temperature value and graph
        const coolantTemp = Math.floor(Math.random() * 120); // Example coolant temperature range from 0°C to 120°C
        coolantTempValue.textContent = coolantTemp;

        // Simulate MPH (random value)
        const mph = Math.floor(Math.random() * 100); // Simulated MPH range
        mphValue.textContent = mph;

        // Simulate gearbox position (random value)
        const gearboxPos = Math.floor(Math.random() * 6) + 1; // Simulated gearbox position range from 1 to 6
        gearboxPosValue.textContent = gearboxPos;

        // Simulate water temperature (random value)
        const waterTemp = Math.floor(Math.random() * 120); // Example water temperature range from 0°C to 120°C
        waterTempValue.textContent = waterTemp;

        // Simulate battery voltage (random value)
        const batteryVoltage = Math.random() * (24 - 12) + 12; // Example battery voltage range from 12V to 24V
        batteryVoltageValue.textContent = batteryVoltage.toFixed(2); // Display voltage with 2 decimal places
    }, 2000); // Update every 2 seconds (example)
});




    // Update sensor values and graphs (example)
    setInterval(function () {
        // Simulate RPMs (idle between 700 and 9000 RPM)
        const rpm = Math.floor(Math.random() * 8300) + 700; // Simulated RPM range
        rpmValue.textContent = rpm;

        // Update boost pressure value and graph
        const boostPressure = Math.floor(Math.random() * 40) - 20; // Example boost pressure range from -20 psi to 20 psi
        boostPressureValue.textContent = boostPressure;
        boostPressureGraph.style.width = (boostPressure + 20) * 5 + "%"; // Convert boost pressure to percentage width

        // Update oil pressure value and graph
        const oilPressure = Math.floor(Math.random() * 100) + 10; // Example oil pressure range from 10 psi to 110 psi
        oilPressureValue.textContent = oilPressure;
        oilPressureGraph.style.width = (oilPressure - 10) + "%"; // Convert oil pressure to percentage width

        // Update oil temperature value and graph
        const oilTemp = Math.floor(Math.random() * 150); // Example oil temperature range from 0°C to 150°C
        oilTempValue.textContent = oilTemp;
        if (oilTemp < 100) {
            oilTempGraph.style.backgroundColor = "#28a745"; // Green color
        } else if (oilTemp < 120) {
            oilTempGraph.style.backgroundColor = "#ffc107"; // Yellow color
        } else {
            oilTempGraph.style.backgroundColor = "#dc3545"; // Red color
        }

        // Update coolant temperature value and graph
        const coolantTemp = Math.floor(Math.random() * 120); // Example coolant temperature range from 0°C to 120°C
        coolantTempValue.textContent = coolantTemp;
        if (coolantTemp < 90) {
            coolantTempGraph.style.backgroundColor = "#28a745"; // Green color
        } else if (coolantTemp < 100) {
            coolantTempGraph.style.backgroundColor = "#ffc107"; // Yellow color
        } else {
            coolantTempGraph.style.backgroundColor = "#dc3545"; // Red color
        }
    }, 2000); // Update every 2 seconds (example)
});

// Function to update RPM sensor
function updateRpmSensor(rpm) {
    document.getElementById("rpmValue").textContent = rpm;
    document.getElementById("rpmGraph").style.width = (rpm / 90) + "%"; // Adjust based on your data
}

// Function to update boost pressure sensor
function updateBoostPressureSensor(boostPressure) {
    document.getElementById("boostPressureValue").textContent = boostPressure;
    document.getElementById("boostPressureGraph").style.width = (boostPressure + 20) * 5 + "%"; // Adjust based on your data
}

// Function to update oil pressure sensor
function updateOilPressureSensor(oilPressure) {
    document.getElementById("oilPressureValue").textContent = oilPressure;
    document.getElementById("oilPressureGraph").style.width = (oilPressure - 10) + "%"; // Adjust based on your data
}

// Function to update oil temperature sensor
function updateOilTempSensor(oilTemp) {
    document.getElementById("oilTempValue").textContent = oilTemp;
    // Adjust background color based on temperature range
    if (oilTemp < 100) {
        document.getElementById("oilTempGraph").style.backgroundColor = "#28a745"; // Green color
    } else if (oilTemp < 120) {
        document.getElementById("oilTempGraph").style.backgroundColor = "#ffc107"; // Yellow color
    } else {
        document.getElementById("oilTempGraph").style.backgroundColor = "#dc3545"; // Red color
    }
}

// Function to update coolant temperature sensor
function updateCoolantTempSensor(coolantTemp) {
    document.getElementById("coolantTempValue").textContent = coolantTemp;
    // Adjust background color based on temperature range
    if (coolantTemp < 90) {
        document.getElementById("coolantTempGraph").style.backgroundColor = "#28a745"; // Green color
    } else if (coolantTemp < 100) {
        document.getElementById("coolantTempGraph").style.backgroundColor = "#ffc107"; // Yellow color
    } else {
        document.getElementById("coolantTempGraph").style.backgroundColor = "#dc3545"; // Red color
    }
}

// Function to update MPH sensor
function updateMphSensor(mph) {
    document.getElementById("mphValue").textContent = mph;
    document.getElementById("mphGraph").style.width = (mph / 120) + "%"; // Adjust based on your data
}

// Function to update gearbox position sensor
function updateGearboxPosSensor(gearboxPos) {
    document.getElementById("gearboxPosValue").textContent = gearboxPos;
    // Update graph or other visual representation as needed
}

// Function to update water temperature sensor
function updateWaterTempSensor(waterTemp) {
    document.getElementById("waterTempValue").textContent = waterTemp;
    // Adjust background color based on temperature range
    if (waterTemp < 90) {
        document.getElementById("waterTempGraph").style.backgroundColor = "#28a745"; // Green color
    } else if (waterTemp < 100) {
        document.getElementById("waterTempGraph").style.backgroundColor = "#ffc107"; // Yellow color
    } else {
        document.getElementById("waterTempGraph").style.backgroundColor = "#dc3545"; // Red color
    }
}

// Function to update battery voltage sensor
function updateBatteryVoltageSensor(batteryVoltage) {
    document.getElementById("batteryVoltageValue").textContent = batteryVoltage;
    // Update graph or other visual representation as needed
}

// Function to handle next button click
document.getElementById("nextBtn").addEventListener("click", function() {
    // Your code to handle next button click goes here
});

// Function to handle previous button click
document.getElementById("prevBtn").addEventListener("click", function() {
    // Your code to handle previous button click goes here
});

// Simulated sensor values
let sensorData = [
    { name: "RPM", min: 0, max: 9666 },
    { name: "Boost Pressure", min: -20, max: 36.6 },
    { name: "Oil Pressure", min: 36, max: 180 },
    { name: "Oil Temperature", min: 130, max: 260 },
    { name: "Coolant Temperature", min: 0, max: 290 },
    { name: "MPH", min: 0, max: 175.5 },
    { name: "Gearbox Position", min: 1, max: 6 },
    { name: "Water Temperature", min: 120, max: 300 },
    { name: "Battery Voltage", min: 7, max: 14.5 },
    { name: "Air-Fuel Ratio", min: -30.3, max: 14.5 }
];

let currentIndex = 0;

// Function to update sensor data
function updateSensorData() {
    const data = sensorData[currentIndex];
    const value = Math.random() * (data.max - data.min) + data.min;
    return { name: data.name, value: value.toFixed(2) };
}

// Function to update sensor display
function updateSensorDisplay(sensor) {
    document.getElementById(sensor.name.replace(/ /g, "") + "Value").textContent = sensor.value;
    // Update graph or other visual representation as needed
}

// Function to handle next button click
document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % sensorData.length;
    const sensor = updateSensorData();
    updateSensorDisplay(sensor);
});

const rpmLabels = [];
const rpmData = [];

// Generate RPM labels and data
for (let i = 1000; i <= 9500; i += 2500) {
    rpmLabels.push(i.toString());
    rpmData.push(i);
}


const canvas = document.getElementById('rpmGauge');
const ctx = canvas.getContext('2d');

const gaugeWidth = 800;
const gaugeHeight = 400;
const maxRpm = 9500;
const rpmInterval = 1000;

let rpm = 0;

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, gaugeWidth, gaugeHeight);

    // Draw gauge outline
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, gaugeWidth, gaugeHeight);

    // Calculate bar width based on current RPM
    const barWidth = (rpm / maxRpm) * gaugeWidth;

    // Draw RPM bar
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(0, 0, barWidth, gaugeHeight);

    // Draw RPM text
    ctx.fillStyle = '#FFF';
    ctx.font = '20px Arial';
    ctx.fillText('RPM: ' + rpm, 10, 30);
}

function update() {
    // Increment RPM
    rpm += rpmInterval;
    if (rpm > maxRpm) {
        rpm = 0;
    }

    // Redraw gauge
    draw();
}

// Start animation
setInterval(update, 2000);

// Function to show the next container
function showNextContainer() {
    const currentContainer = document.getElementById('container1');
    const nextContainer = document.getElementById('container2');

    currentContainer.style.display = 'none';
    nextContainer.style.display = 'block';
}

// Function to show the previous container
function showPreviousContainer() {
    const currentContainer = document.getElementById('container1');
    const previousContainer = document.getElementById('container2');

    currentContainer.style.display = 'block';
    previousContainer.style.display = 'none';
}

// Event listener for the "Next" button
document.getElementById('nextBtn').addEventListener('click', showNextContainer);

// Event listener for the "Previous" button
document.getElementById('prevBtn').addEventListener('click', showPreviousContainer);

let currentContainerIndex = 1; // Index of the current active container

// Function to show the next container
function showNextContainer() {
    const currentContainer = document.getElementById(`container${currentContainerIndex}`);
    const nextContainerIndex = currentContainerIndex === 1 ? 2 : 1;
    const nextContainer = document.getElementById(`container${nextContainerIndex}`);

    currentContainer.style.display = 'none';
    nextContainer.style.display = 'block';

    currentContainerIndex = nextContainerIndex;
}

// Function to show the previous container
function showPreviousContainer() {
    const currentContainer = document.getElementById(`container${currentContainerIndex}`);
    const previousContainerIndex = currentContainerIndex === 1 ? 2 : 1;
    const previousContainer = document.getElementById(`container${previousContainerIndex}`);

    currentContainer.style.display = 'none';
    previousContainer.style.display = 'block';

    currentContainerIndex = previousContainerIndex;
}

// Event listener for the "Next" button
document.getElementById('nextBtn').addEventListener('click', showNextContainer);

// Event listener for the "Previous" button
document.getElementById('prevBtn').addEventListener('click', showPreviousContainer);

document.addEventListener("DOMContentLoaded", function () {
    const sensorDisplays = document.querySelectorAll(".sensor-display");
    let currentIndex = 0;

    // Function to update sensor display
    function updateSensorDisplay(index) {
        sensorDisplays.forEach((display, i) => {
            if (i === index) {
                display.style.display = "block";
            } else {
                display.style.display = "none";
            }
        });
    }

    // Function to handle next button click
    document.getElementById("nextBtn").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % sensorDisplays.length;
        updateSensorDisplay(currentIndex);
    });

    // Function to handle previous button click
    document.getElementById("prevBtn").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + sensorDisplays.length) % sensorDisplays.length;
        updateSensorDisplay(currentIndex);
    });

    // Simulated sensor values
    let sensorData = [
        { name: "RPM", min: 0, max: 9666 },
        { name: "Boost Pressure", min: -20, max: 36.6 },
        { name: "Oil Pressure", min: 36, max: 180 },
        { name: "Oil Temperature", min: 130, max: 260 },
        { name: "Coolant Temperature", min: 0, max: 290 },
        { name: "MPH", min: 0, max: 175.5 },
        { name: "Gearbox Position", min: 1, max: 6 },
        { name: "Water Temperature", min: 120, max: 300 },
        { name: "Battery Voltage", min: 7, max: 14.5 },
        { name: "Air-Fuel Ratio", min: -30.3, max: 14.5 }
    ];

    // Function to update sensor data
    function updateSensorData() {
        const data = sensorData[currentIndex];
        const value = Math.random() * (data.max - data.min) + data.min;
        return { name: data.name, value: value.toFixed(2) };
    }

    // Function to update sensor values and display
    function updateSensorValuesAndDisplay() {
        const sensor = updateSensorData();
        const sensorDisplay = document.getElementById(sensor.name.replace(/ /g, "") + "Value");
        if (sensorDisplay) {
            const sensorValue = sensorDisplay.querySelector("span");
            if (sensorValue) {
                sensorValue.textContent = sensor.value;
            }
        }
    }

    // Start updating sensor values and display
    setInterval(updateSensorValuesAndDisplay, 2000);
});


    // Update sensor values and draw RPM gauge
    setInterval(function () {
        // Simulate RPMs (idle between 700 and 9000 RPM)
        const rpm = Math.floor(Math.random() * 8300) + 700; // Simulated RPM range
        rpmValue.textContent = rpm;

        // Draw RPM gauge
        drawGauge(rpm);
    }, 2000); // Update every 2 seconds (example)

    document.addEventListener("DOMContentLoaded", function () {
        const sensorDisplays = document.querySelectorAll(".sensor-display");
        let currentIndex = 0;

        // Function to update sensor display
        function updateSensorDisplay(index) {
            sensorDisplays.forEach((display, i) => {
                if (i === index) {
                    display.classList.add("active");
                } else {
                    display.classList.remove("active");
                }
            });
        }

        // Function to handle next button click
        document.getElementById("nextBtn").addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % sensorDisplays.length;
            updateSensorDisplay(currentIndex);
        });

        // Function to handle previous button click
        document.getElementById("prevBtn").addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + sensorDisplays.length) % sensorDisplays.length;
            updateSensorDisplay(currentIndex);
        });

        // Simulated sensor values
        const sensorData = [
            { name: "Gearbox Position", value: "1st,2nd,3rd,4th,5th" },
            { name: "Water Temperature", value: "120°C" }
            // Add more sensor data here
        ];

        // Function to update sensor values
        function updateSensorValues() {
            sensorDisplays.forEach((display, i) => {
                const valueElement = display.querySelector(".value");
                if (valueElement) {
                    valueElement.textContent = sensorData[i].value;
                }
            });
        }

        // Initial update of sensor values
        updateSensorValues();
    });