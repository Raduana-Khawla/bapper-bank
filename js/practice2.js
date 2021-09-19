function inputField(inputId){
    const inputElement = document.getElementById(inputId);
    const inputAmountText= inputElement.value;
    const inputAmount = parseFloat(inputAmountText);
    inputElement.value='';
    return inputAmount;
}
function updateTotalField(inputFieldId,amount){
    const inputTotalField = document.getElementById(inputFieldId);
    const inputBalanceText= inputTotalField.innerText;
    const inputBalance = parseFloat(inputBalanceText);
    const totalField=inputBalance+amount;
    inputTotalField.innerText = totalField;
}
function totalCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText= totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    return totalBalanceAmount;
}
function updatBalance(balance,isAdd){
    const totalBalance = document.getElementById('balance-total');
   const totalAmount = totalCurrentBalance();
    if(isAdd==true){
        const currentBalance = totalAmount+balance;
        totalBalance.innerText = currentBalance;
    }
    else{
        const currentBalance = totalAmount-balance;
        totalBalance.innerText = currentBalance;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = inputField('deposit-input');
   if(depositAmount>0){
    updateTotalField('deposit-total',depositAmount);
    updatBalance(depositAmount,true);
   }
});
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = inputField('withdraw-input');
    const totalValue=totalCurrentBalance();
   if(withdrawAmount>0 && withdrawAmount<totalValue){
    updateTotalField('withdraw-total',withdrawAmount);
    updatBalance(withdrawAmount,false);
   }
   if(withdrawAmount>totalValue){
       console.log('You cannot withdraw more than you have in your account');
   }
});