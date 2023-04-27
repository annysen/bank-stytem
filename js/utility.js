// get input value by id
function getInputValueById(inputFieldId) {
  const inputAmountElement = document.getElementById(inputFieldId);
  const inputAmountString = inputAmountElement.value;
  const inputAmount = parseFloat(inputAmountString);
  inputAmountElement.value = "";
  return inputAmount;
}

// get previous amount
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

// set the value to the element
function setValueToElement(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
