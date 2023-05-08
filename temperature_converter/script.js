const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-button");
const resultDiv = document.getElementById("result");

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

convertButton.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  let convertedTemperature;
  if (unit === "celsius") {
    convertedTemperature = convertToFahrenheit(temperature);
    resultDiv.innerHTML = `${temperature} °C = ${convertedTemperature} °F`;
  } else {
    convertedTemperature = convertToCelsius(temperature);
    resultDiv.innerHTML = `${temperature} °F = ${convertedTemperature} °C`;
  }
});

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertButton.click();
  }
});

temperatureInput.addEventListener("input", function() {
  resultDiv.innerHTML = "";
});

unitSelect.addEventListener("change", function() {
  resultDiv.innerHTML = "";
});
