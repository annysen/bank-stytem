// step-1
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step- 2
  const depositInputField = document.getElementById("deposit-input-field");
  const depositAomunt = parseFloat(depositInputField.value);

  //   step-3
  depositInputField.value = "";

  //   step- 4
  const previousDepositField = document.getElementById("depostit-total");
  const previousDepositTotal = parseFloat(previousDepositField.innerText);

  //   step- 5
  const newDepositTotal = previousDepositTotal + depositAomunt;
  previousDepositField.innerText = newDepositTotal;
});
