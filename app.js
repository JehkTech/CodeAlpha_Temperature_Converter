function convert() {
  const convertButton = document.getElementById("convertButton");
  const inputTemp = document.getElementById("inputTemp");
  const resultText = document.getElementById("resultText");
  const unitLabel = document.getElementById("unitLabel");

  if (convertButton.innerText.startsWith("Convert to Celsius")) {
    if (inputTemp.value !== "") {
      const fahrenheit = parseFloat(inputTemp.value);
      const celsius = (fahrenheit - 32) * 5 / 9;
      resultText.innerText = `${fahrenheit.toFixed(2)}°F is ${celsius.toFixed(2)}°C`;
    } else {
      resultText.innerText = "Please enter a temperature";
    }
    convertButton.innerText = "Convert to Fahrenheit (enter Celsius)";
    unitLabel.innerText = "°C";
  } else {
    if (inputTemp.value !== "") {
      const celsius = parseFloat(inputTemp.value);
      const fahrenheit = celsius * 9 / 5 + 32;
      resultText.innerText = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
      resultText.innerText = "Please enter a temperature";
    }
    convertButton.innerText = "Convert to Celsius (enter Fahrenheit)";
    unitLabel.innerText = "°F";
  }
  inputTemp.value = "";
}