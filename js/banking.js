function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const newAmount = parseFloat(inputField.value);
  //clear the deposit input field
  inputField.value = " ";
  return newAmount;
}

function updateTotalField(inputId, newAmount){
    const inputTotal = document.getElementById(inputId);
    const previousInputTotal = parseFloat(inputTotal.innerText);
    const newTotalInput = newAmount + previousInputTotal;
    inputTotal.innerText = newTotalInput;
    return newTotalInput;
}

function updateAccountBalance(newTotalAmount, isAdd){
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotal.innerText);
  let newBalanceTotal;
  if(isAdd === true){
    newBalanceTotal = previousBalanceTotal - newTotalAmount;
  }else{
    newBalanceTotal = previousBalanceTotal + newTotalAmount;
  }
  balanceTotal.innerText = newBalanceTotal;
}

//handle deposit button event

document.getElementById('deposit-btn').addEventListener('click',()=>{
  const newDepositAmount = getInputValue('deposit-input');
//get and update deposit total
 const newDepositTotal = updateTotalField("deposit-total", newDepositAmount);

  //update account balance
  updateAccountBalance(newDepositTotal ,true)

})

//handle withdraw button

document.getElementById('withdraw-btn').addEventListener('click',()=>{
  const newWithdrawAmount = getInputValue('withdraw-input');
  //get and update withdraw total
     const newWithdrawTotal = updateTotalField(
       "withdraw-total",
       newWithdrawAmount
     );
    //update account balance
    updateAccountBalance(newWithdrawTotal , false)
})