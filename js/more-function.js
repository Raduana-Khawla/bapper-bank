function getInput(inputId){
    const inputBalance = document.getElementById(inputId);
    const inputBalanceText= inputBalance.value;
    const previousBalance = parseFloat(inputBalanceText);
    inputBalance.value ='';
    return previousBalance;
}

function updateTotalBalance(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText= totalElement.innerText;
    const previousTotalBalance = parseFloat(totalText);
    totalElement.innerText = amount+previousTotalBalance;
}
function getCurrentBalance(){
    const inputTotalBalance = document.getElementById('balance-total');
    const inputTotalBalanceText= inputTotalBalance.innerText;
    const lastBalance = parseFloat(inputTotalBalanceText);
    return lastBalance;
}
function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const lastBalance = getCurrentBalance();
    if(isAdd == true)
    {
        balanceTotal.innerText = lastBalance +amount;
    }
    else{
        balanceTotal.innerText = lastBalance -amount;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount=getInput('deposit-input');
    if(depositAmount>0){
    updateTotalBalance('deposit-total',depositAmount);
    updateBalance(depositAmount, true);
    }
    
});
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount=getInput('withdraw-input');
    const currentBalance =getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){

        updateTotalBalance('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You cannat withdraw more than your have in your account');
     }
});

