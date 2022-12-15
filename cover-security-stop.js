// -----------------------------------------------------------------------
// Developed by YBC
//
// Date: 15/12/2022
// Version: 1.0
//
// Shelly Script: This script allows to stop a 2PM shelly in cover mode when
// the digital input of Addon Plus is closed
//
// Devices: 
// - Shelly 2PM (to control cover),
// - Shelly Plus Addon (to close contact in digital input)
//
// www.shellycanarias.com
// -----------------------------------------------------------------------

let sensorState = true;

// Get status of sensor the first time
Shelly.call("Input.GetStatus", {'id': 101}, function (e){
           sensorState = e.state;
         });
       
       
Shelly.addStatusHandler(function(e) {
//Update the sensorState when sensor change and stop if it is true
  if (e.component === "input:101") {
    sensorState = e.delta.state;
    if (sensorState === false) {
       Shelly.call("Cover.stop", {'id': 0});
    }
  }
//If cover is opening or closing and the sensor is true, cover is stopped
  if (e.component === "cover:0") {    
     if (e.delta.state !== "stopped") {
         if (sensorState === false){
           Shelly.call("Cover.stop", {'id': 0});
         }
     }
     
  }
  
});
