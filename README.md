# shelly-scripts
Scripts to Shelly Gen2 Devices

## Cover Security Stop
This script allows to stop a 2PM shelly in cover mode when
the digital input of Addon Plus is closed

Connect the magnetic sensor to Digital and GND, the sensor can be normally closed, otherwise you can "Enable invert input" in Digital Input Settings:

<img src="https://user-images.githubusercontent.com/2444886/207821338-d2774f88-6a25-48bf-a9d6-76a8ee7c993c.jpeg" width="400">

You need to Add Peripheral as Digital Input:

<img src="https://user-images.githubusercontent.com/2444886/207820058-5ed20e13-748c-48c0-a7cc-807d5cc66344.png" width="400">



## Power Regulator Shelly EM and Shelly UNI
This script reads the power of ShellyEM and ShellyUni Acts on the push buttons to decrease or increase an external power regulator

You need to to connect the OUT1 and OUT2 to Increase and Decrease buttons of external power regulator:

<img src="https://user-images.githubusercontent.com/2444886/207826332-13dab505-7f32-49a7-9ed1-c89223adf416.jpeg" width="400">

Then you have to install Shelly EM in your main phase wire

Configure the ShellyEM IP and Channel (0 or 1) in script configuration
Configure the Shelly Uni IP and Channels of increase and decrease
Configure the Max Power in which the regulator will decrease

<img src="https://user-images.githubusercontent.com/2444886/207827541-1d100148-f1aa-4f61-a8c1-303dd533dff9.png" width="250">





