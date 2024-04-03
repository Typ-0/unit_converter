const inputEl = document.getElementById("inputUnit")
const btnEl = document.getElementById("myBtn")
const unit = document.getElementById('inputUnit').value
const metricsEl = document.getElementById("metrics")
const lenghtEl = document.getElementById("lenghtContent")
const volumeEl = document.getElementById("volumeContent")
const massEl = document.getElementById("massContent")

btnEl.addEventListener('click', render)
function render() {
        const valor = document.getElementById("inputUnit").value

        const meterToFeet = valor * 3.28084;
        const feetToMeter = valor / 3.28084;

        const literToGallon = valor * 0.264172;
        const gallonToLiter = valor / 0.264172;

        const kilosToPounds = valor * 2.20462;
        const poundsToKilos = valor / 2.20462;

        massEl.innerHTML = `${valor} kilos = ${meterToFeet.toFixed(2)} pounds | ${valor} pounds = ${feetToMeter.toFixed(2)} kilos`
        lenghtEl.innerHTML = `${valor} meters = ${literToGallon.toFixed(2)} feet | ${valor} feet = ${gallonToLiter.toFixed(2)} meters`
        volumeEl.innerHTML = `${valor} liters = ${kilosToPounds.toFixed(2)} gallons | ${valor} gallons = ${poundsToKilos.toFixed(2)} liters`
        
}




