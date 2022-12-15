// -----------------------------------------------------------------------
// Developed by YBC
//
// Date: 15/12/2022
// Version: 1.1
//
// Shelly Script: This script reads the power of ShellyEM and
// with ShellyUni Acts on the push buttons to decrease or increase the
// power regulator
//
// Devices: 
// - Shelly Plus 1 (to execute script)
// - Shelly EM (to measure the power)
// - Shelly Uni (to control power regulator) 
//
// www.shellycanarias.com
// -----------------------------------------------------------------------


let CONFIG = {
  
  shellyEM: "192.168.1.209",
  shellyEMChannel: "1",
  shellyUni: "192.168.1.208",
  shellyUni_UpChannel: "1",
  shellyUni_DownChannel: "0",
  shellyUni_PushSeconds: "1",
  max_Power: 400,
  threshold : 100, 
  regulator_steps : 15
};

let regStatus = 0;

//Initial Configuration
let timer = Timer.set(2000, true, function(){
  setShellyUni(CONFIG.shellyUni_UpChannel);
  regStatus +=1
  print(regStatus);
  if (regStatus === CONFIG.regulator_steps){
    Timer.clear(timer);
    print("Initialization completed");
    run();
  }
  
});

let getShellyEM = function() {
  Shelly.call(
    "http.get",
    { url: "http://" + CONFIG.shellyEM + "/emeter/" + CONFIG.shellyEMChannel },
    function (response, error_code, error_message, ud) {
      regulateUni(JSON.parse(response.body).power);
    },
    null
  );
};

let setShellyUni = function(channel) {
  Shelly.call(
    "http.get",
    { url: "http://" + CONFIG.shellyUni + "/relay/" + channel + "?turn=on&timer="+ CONFIG.shellyUni_PushSeconds },
    null,
    null
  );
};
function regulateUni(power){

  if (power > CONFIG.max_Power && regStatus > 0){
      setShellyUni(CONFIG.shellyUni_DownChannel);
      regStatus -= 1;
      print("-1");
    } 
    else if (power < CONFIG.max_Power + CONFIG.threshold && regStatus < CONFIG.regulator_steps) {
      setShellyUni(CONFIG.shellyUni_UpChannel);
      regStatus += 1;
      print("+1");
    }
    print(regStatus);
}


function run(){
 print('Running')
 Timer.set(2000, true, getShellyEM);
}