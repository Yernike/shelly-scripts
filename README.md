# Scripts of Shelly Gen2 Devices
- [Cover Security Stop](#cover-security-stop) 
- [Power Regulator Shelly EM and Shelly UNI](#power-regulator-shelly-em-and-shelly-uni)
- [Thermostat](#thermostat)
- [Autonomous BLU Button1](#autonomous-blu-button1)

## Cover Security Stop
This script allows to stop a 2PM shelly in cover mode when
the digital input of Addon Plus is closed

**Devices**
- Shelly Plus 2PM (Control the cover)
- Shelly Plus Addon (Input the sensor)

**Instructions:**

Connect the magnetic sensor to Digital and GND, the sensor can be normally closed, otherwise you can "Enable invert input" in Digital Input Settings:

<img src="https://user-images.githubusercontent.com/2444886/207821338-d2774f88-6a25-48bf-a9d6-76a8ee7c993c.jpeg" width="400">

You need to Add Peripheral as Digital Input:

<img src="https://user-images.githubusercontent.com/2444886/207820058-5ed20e13-748c-48c0-a7cc-807d5cc66344.png" width="400">



## Power Regulator Shelly EM and Shelly UNI
This script reads the power of ShellyEM and ShellyUni Acts on the push buttons to decrease or increase an external power regulator

**Devices**
- Shelly Plus (Any Gen2) (Run script)
- Shelly EM (Measure the current consumption)
- Shelly Plus Addon (Control the external regulator)

**Instructions:**

You need to to connect the OUT1 and OUT2 of Shelly UNI to Increase and Decrease buttons of external power regulator:

<img src="https://user-images.githubusercontent.com/2444886/207826332-13dab505-7f32-49a7-9ed1-c89223adf416.jpeg" width="400">

Then you have to install Shelly EM in your main phase wire

<img src="https://user-images.githubusercontent.com/2444886/207832873-40ae981f-be1e-4a80-b5cd-d85ad53b65e3.png" width="250">

**Script Configuration**    
Configure the ShellyEM IP and Channel (0 or 1) in script configuration
Configure the Shelly Uni IP and Channels of increase and decrease
Configure the Max Power in which the regulator will decrease

<img src="https://user-images.githubusercontent.com/2444886/207827541-1d100148-f1aa-4f61-a8c1-303dd533dff9.png" width="250">

## Thermostat ##
This script is a thermostat cool or heat mode, it turns the switch on or off based on temperature, setting a temperature change limit called hysteresis

**Devices:**
- Shelly Plus 1 or Shelly Plus 1PM,
- Shelly Plus Addon
- Sensor DS18B20

**Instructions:**

Connect the DS18B20 to VCC, DATA, GND in Plus Addon

<img src="https://user-images.githubusercontent.com/2444886/207860016-4fb0b9a1-d3fd-403e-a77b-ed787ef2fe88.jpeg" width="400">

You need to Add Peripheral as Temperature (DS18B20)

<img src="https://user-images.githubusercontent.com/2444886/207860196-87d45010-f962-4f8b-9150-c797b1c60899.png" width="400">

**Script Configuration**

- Config temperature = temperature that you want to reach
- Config hysteresis = threshold of temperature change to enable or disable switch
- Config mode = (H)Heat or (C)Cool. 
     - In Cool Mode (C) the switch is activated when the temperature is higher than Config Temperature + Config Threshold and the switch is disabled
    when temperature is less or equal than Config Temperature
     - In Heat Mode (H)  the switch is activated when the temperature is less than Config Temperature + Config Threshold and the switch is disabled
    when temperature is higher or equal than Config Temperature
Config sensorId = is the sensor id provided by the device when adding the peripheral ex: the name of Peripheral = Temperature (100)

<img src="https://user-images.githubusercontent.com/2444886/207861148-07c92620-e9cb-47f2-a8ab-3c8485ae2201.png" width="200">

## Autonomous BLU Button1 ##
This script allow register up to 45x BLU Button1 to use autonomous open door.  When you push the registered BLU Button1, the relay turn on and turn off in 1 second.

<img src="https://github.com/Yernike/shelly-scripts/assets/2444886/f623dcc0-9188-479a-a8cb-38c3a4ca995b" width="400">


**Devices:**
- Shelly Plus 1
- Shelly BLU Button 1

**Instructions:**
- Plug the Shelly Plus
- Install and run this script

- Register BLU Button1
  When you plug your Shelly Plus, you have 10 seconds to register and unregister BLU Buttons, this is recorder in internal memory.

- Push one time BLU Button1 until 10s you register the button
- Push twice BLU Button1 until 10s you unregister the button
