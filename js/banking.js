//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',()=>{
  //get the amount deposited
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmount = parseFloat(depositInput.value); ;
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositAmount = parseFloat(depositTotal.innerText);
  const newDepositTotal = newDepositAmount + previousDepositAmount;
  depositTotal.innerText = newDepositTotal;

  //update account balance
   const balanceTotal = document.getElementById("balance-total");
   const previousBalanceTotal = parseFloat(balanceTotal.innerText);
   const newBalanceTotal = previousBalanceTotal + newDepositTotal;
   balanceTotal.innerText = newBalanceTotal;
  //clear the deposit input field
  depositInput.value = ' ';
})
//handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click',()=>{
  const withdrawInput = document.getElementById('withdraw-input');
  const newWithdrawAmount = withdrawInput.value;
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotal = withdrawTotal.innerText;
  const newWithdrawTotal =
    parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
 //clear input field
 withdrawInput.value = ''
})