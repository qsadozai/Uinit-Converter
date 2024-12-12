const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

let inputVal = document.getElementById("input-value");
let meterToFeetResult = document.getElementById("mtr-to-ft-result");
let literToGallonResult = document.getElementById("ltr-to-gln-result");
let convertBtn = document.getElementById("convert-btn");
let kiloToPoundResult = document.getElementById("kilo-to-pound-result");

convertBtn.addEventListener("click", function () {
	let meterToFeet = `${inputVal.value} meters = ${(
		inputVal.value * meter
	).toFixed(3)} feet`;
	let feetToMeter = `${inputVal.value} feet = ${(
		inputVal.value / meter
	).toFixed(3)} meter`;

	let literToGallon = `${inputVal.value} liters = ${(
		inputVal.value * liter
	).toFixed(3)} gallons`;
	let gallonToLiter = `${inputVal.value} gallons = ${(
		inputVal.value / liter
	).toFixed(3)} liters`;

	let kiloToPound = `${inputVal.value} Kilos = ${(
		inputVal.value * kilogram
	).toFixed(3)} Pounds`;
	let poundToKilo = `${inputVal.value} Pounds = ${(
		inputVal.value / kilogram
	).toFixed(3)} Kilos`;

	meterToFeetResult.innerHTML = `${meterToFeet} | ${feetToMeter}`;
	literToGallonResult.innerHTML = `${literToGallon} | ${gallonToLiter}`;
	kiloToPoundResult.innerHTML = `${kiloToPound} | ${poundToKilo}`;
});

