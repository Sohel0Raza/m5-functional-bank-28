document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('bap ar bank ar ato taka nai')
        return;
    }
    
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    const currentBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalance;
})