let power_meter = require('./power-meter');
let pm = new power_meter.PowerMeter();

function a() {
    let power_instant = Math.round(Math.random() * 40 + 300);
    let cadence = Math.round(Math.random() * 10 + 80);
    pm.broadcast(power_instant, cadence);
    setTimeout(a, 249);
}

a();
