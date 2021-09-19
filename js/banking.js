//handle deposite button event
document.getElementById('deposit-button').addEventListener('click',function(){
    //console.log('deposit button clicked');

    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
//update depositive total
   const depositTotal=  document.getElementById('deposit-total');
   //console.log(depositTotal.value);ata vul cz ata input na tai value hobena
   //console.log(depositTotal.innerText);
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   //console.log(previousDepositAmount,newDepositAmount);

   const newDepositTotal = previousDepositAmount + newDepositAmount;
   depositTotal.innerText = newDepositTotal;

//update balance

const balanceTotal = document.getElementById('balance-total')
;
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;
   //clean the deposite input field
   depositInput.value = '';
});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //console.log(newWithdrawAmount);

    //set withdraw total        
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update balance

const balanceTotal = document.getElementById('balance-total')
;
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;
    //clean the deposite input field
   withdrawInput.value = ''; 
});