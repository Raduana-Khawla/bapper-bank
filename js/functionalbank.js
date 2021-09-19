function getInputValue(inputId){
    //debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
      
    inputField.value = '';
    return amountValue;
    //call kora lagle return dete hobe
}

function updateTotalField(totalFieldId,amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); 
    return previousBalanceTotal;
}
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText); 
const previousBalanceTotal = getCurrentBalance();   
    if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else{
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}
//handle deposite button
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0){
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount, true);
}
});
//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
       console.log('You cannat withdraw more than your have in your account');
    }
    
    
})


