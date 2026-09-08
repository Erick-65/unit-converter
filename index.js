/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const pLength = document.getElementById("p-length")
const pVolume = document.getElementById("p-volume")
const pMass = document.getElementById("p-mass")
const inputEl = document.getElementById("input")
const btnEl = document.getElementById("convert-btn")

btnEl.addEventListener("click", function () {
    pLength.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    pVolume.textContent = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    pMass.textContent = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms`

    inputEl.value = ""
})