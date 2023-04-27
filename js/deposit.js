document.getElementById("deposit-btn").addEventListener("click", function () {
  // get input deposit value
  const depositAomunt = getInputValueById("deposit-input-field");

  // get previous deposit Total value
  const previousDepositTotal = getElementValueById("depostit-total");

  // calculate new Deposit
  const newDepositAmount = previousDepositTotal + depositAomunt;
  console.log(newDepositAmount);

  // update new Deposit to deposit section
  setValueToElement("depostit-total", newDepositAmount);

  // get total balance value
  const previousTotalBalance = getElementValueById("balance-total");

  // calculate new total balance
  const newTotalBalance = previousTotalBalance + depositAomunt;

  // update new total balance
  setValueToElement("balance-total", newTotalBalance);
});
