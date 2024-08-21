"use strict";
class AirConditioner {
    constructor() {
        this.brand = 'haier';
        this.color = "white";
        this.voltage = 1.5;
        this.temperature = 24;
    }
    turnOn() {
        console.log('Air Conditioner is on');
    }
    turnOff() {
        console.log('Air Conditioner is off');
    }
    raiseTemperature() {
        this.temperature++;
        console.log(`Temperature is raised to ${this.temperature}`);
    }
    decreaseTemperature() {
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
// ==================================================================================================
class earphones {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const e1 = new earphones("apple", 25000);
const e2 = new earphones("hp", 5200);
// *************************Public / Private / Protected*******************
class Mobile {
    constructor() {
        this.OS = "Android";
        this.IMEINO = "ASDF4568ER249";
        this.BRAND = "Vivo";
    }
}
class Oppo extends Mobile {
    constructor() {
        super();
        this.BRAND = "oppo";
    }
}
const m1 = new Mobile();
m1.OS = "IOS";
// m1.IMEINO     // can't be accessed b/c its private 
const m2 = new Oppo;
// m2.BRAND      // can't be accessed b/c its protected
