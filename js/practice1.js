
function getInputValue(InputId){
    const inputElement = document.getElementById(InputId);
    const inputAmountText = inputElement.value;
    const amount = parseFloat(inputAmountText); 
    inputElement.value = '';
    return amount;
}

function updateTotalField(inputFieldId,totalAmount){
    const inputField=  document.getElementById(inputFieldId);
   const previousText = inputField.innerText;
   const previousAmount = parseFloat(previousText);
   const newAmountTotal = previousAmount + totalAmount;
   inputField.innerText = newAmountTotal;
}
function updatBalance(balance,isAdd){
    const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
if(isAdd == true){
    const newBalanceTotal = previousBalanceTotal + balance;
    balanceTotal.innerText = newBalanceTotal;
}
else{
    const newBalanceTotal = previousBalanceTotal - balance;
     balanceTotal.innerText = newBalanceTotal;
}
}
//handle deposite button event
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',depositAmount);
    updatBalance(depositAmount,true);
});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total',withdrawAmount);
    updatBalance(withdrawAmount,false);
   
});