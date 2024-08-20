class AirConditioner {
  brand = 'haier';
  color = "white";
  voltage = 1.5

  temperature = 24
    

  turnOn () {
    console.log('Air Conditioner is on');
  }

  turnOff() {
    console.log('Air Conditioner is off');
  }

  raiseTemperature() {
    this.temperature++;
    console.log(`Temperature is raised to ${this.temperature}`);
  }

  decreaseTemperature(){
    this.temperature--;
    console.log(`Temperature is decreased to ${this.temperature}`);
  }
}


const ac1 = new AirConditioner();

ac1.turnOn();
ac1.raiseTemperature();
ac1.raiseTemperature();

const ac2 = new AirConditioner();

ac2.turnOn();
ac2.raiseTemperature();