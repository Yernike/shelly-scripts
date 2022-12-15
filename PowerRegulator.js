// -----------------------------------------------------------------------
// Developed by YBC
//
// Date: 15/12/2022
// Version: 1.0
//
// Shelly Script: This script reads the power of ShellyEM and
// with ShellyUni Acts on the push buttons to decrease or increase the
// power regulator
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
    max_Power: 300,
    regulator_steps : 10
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
        print(regStatus);
      } 
      else if (power < CONFIG.max_Power && regStatus < CONFIG.regulator_steps) {
        setShellyUni(CONFIG.shellyUni_UpChannel);
        regStatus += 1;
        print("suma");
      }
      print(regStatus);
  }
  
  
  function run(){
   print('Running')
   Timer.set(2000, true, getShellyEM);
  }
  