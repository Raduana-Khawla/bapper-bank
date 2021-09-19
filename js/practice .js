//1.1st step input value show on the id=deposit-t=total.

// document.getElementById('deposit-button').addEventListener('click',function(){

//     const depositInput = document.getElementById('deposit-input');
//     const depositAmount = depositInput.value;

//     const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText;

//     depositTotal.innerText = depositAmount;
//     console.log(depositTotalText);
//})


//2.deposit  add  and  show then add with total balance

//handle deposit event handler
document.getElementById('deposit-button').addEventListener('click',function(){

    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const previousDepositAmount = parseFloat(depositInputText);
//set deposit total
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
/* //add value 1st time time 
    const newDepositAmount = previousDepositAmount + previousDepositTotal;
//assign value
    depositTotal.innerText = newDepositAmount;
     // const newDepositAmount = depositAmount + previousDepositTotal;
    // depositTotal.innerText = newDepositAmount; */
//set total balance
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText); 
//add value 2nd time 
      const newBalanceTotal = previousBalanceTotal + newDepositAmount;
      //assign value
      balanceTotal.innerText = newBalanceTotal;

 //clean the deposite input field
    depositInput.value = '';

})
//3.withdraw  add and show then remove from total balance

//handle deposit event handler
document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

//set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
//add value 1st time
    const newWithdrawAmount = previousWithdrawAmount + withdrawInputAmount;
//assign value
    withdrawTotal.innerText = newWithdrawAmount;
//set total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalAmount = parseFloat(totalBalanceText);
//remove value 2nd time 
    const newTotalAmount = totalAmount - newWithdrawAmount;
//assign value
    totalBalance.innerText = newTotalAmount;
 //clean the withdraw input field
    withdrawInput.value = '';
})