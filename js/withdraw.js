document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get withdraw value
  const newWithdraw = getInputValueById("withdraw-input-field");

  //   get previous withdra total
  const previousWithdrawTotal = getElementValueById("withdraw-total");

  // calculate new withdraw Value
  const newWithdrawTotal = previousWithdrawTotal + newWithdraw;

  // set the new Withdraw Total value
  setValueToElement("withdraw-total", newWithdrawTotal);

  //   get the total balance
  const previousTotalBalance = getElementValueById("balance-total");

  // calculate total current balance
  const newTotalBalance = previousTotalBalance - newWithdraw;

  //   update total balance
  setValueToElement("balance-total", newTotalBalance);
});
