// -----------------------------------------------------------------------
// Developed by YBC
//
// Date: 15/12/2022
// Version: 1.0
//
// Shelly Script: This script is a thermostat cool or heat, it turns the 
// switch on or off based on temperature, setting a temperature change limit called hysteresis
//
// Devices: 
// - Shelly Plus 1 or Shelly Plus 1PM,
// - Shelly Plus Addon
// - Sensor DS18B20
//
// www.shellycanarias.com
// -----------------------------------------------------------------------


//Config temperature = temperature that you want to reach
//Config hysteresis = threshold of temperature change to enable or disable switch
//Config mode = (H)Heat or (C)Cool. 
//  - In Cool Mode (C) the switch is activated when the temperature is higher than Config Temperature + Config Threshold and the switch is disabled
//    when temperature is less or equal than Config Temperature
//  - In Heat Mode (H)  the switch is activated when the temperature is less than Config Temperature + Config Threshold and the switch is disabled
//    when temperature is higher or equal than Config Temperature

let CONFIG ={
    temperature: 28,
    hysteresis: 2,
    mode: "H"
  };
  
  Shelly.addStatusHandler(function (event) {
    
    if (event.name === "temperature" && event.id === 100) {
  
      let temperature = event.delta.tC;
      print(temperature);
      if (CONFIG.mode === "C"){
        if (temperature > (CONFIG.temperature + CONFIG.hysteresis)){
          Shelly.call("Switch.set", {'id': 0, 'on': true});
          print("Switch ON");
        }
        else if (temperature <= CONFIG.temperature) {
          Shelly.call("Switch.set", {'id': 0, 'on': false});
          print("Switch OFF");
        }
     }
     else if (CONFIG.mode === "H"){
       if (temperature < (CONFIG.temperature - CONFIG.hysteresis)){
             Shelly.call("Switch.set", {'id': 0, 'on': true});
             print("Switch ON");
        }
        else if (temperature >= CONFIG.temperature) {
          Shelly.call("Switch.set", {'id': 0, 'on': false});
          print("Switch OFF");
         }
       }
    }
  });
  