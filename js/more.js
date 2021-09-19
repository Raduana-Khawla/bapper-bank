document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText= depositInput.value;
    const newdepositAmount = parseFloat(depositInputText);
    // depositInput.value ='';
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText= depositTotal.innerText;
    const previousTotalAmount = parseFloat(depositTotalText);

    const depositTotalAmount = previousTotalAmount + newdepositAmount;
    depositTotal.innerText = depositTotalAmount;

    const depositBalance = document.getElementById('balance-total');
    const depositBalanceText= depositBalance.innerText;
    const previousTotalBalance = parseFloat(depositBalanceText);

    const TotalBalance = previousTotalBalance + newdepositAmount;
    depositBalance.innerText = TotalBalance;

    // depositInput.value ='';
//})

// document.getElementById('withdraw-button').addEventListener('click',function(){
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawInputText= withdrawInput.value;
//     const newWithdrawAmount = parseFloat(withdrawInputText);

//     const withdrawTotal = document.getElementById('withdraw-total');
//     const withdrawTotalText= withdrawTotal.innerText;
//     const previousTotalAmount = parseFloat(withdrawTotalText);

    // const withdrawTotalAmount = previousTotalAmount + newWithdrawAmount;
    // withdrawTotal.innerText = withdrawTotalAmount;
    
    const inputBalance = document.getElementById('balance-total');
    const inputBalanceText= inputBalance.innerText;
    const previousTotalBalance = parseFloat(inputBalanceText);

    const TotalBalance = previousTotalBalance - newWithdrawAmount;
    inputBalance.innerText = TotalBalance;
    withdrawInput.value ='';
    
//})