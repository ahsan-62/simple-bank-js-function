document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    withdrawInput.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;   

    balanceTotal.innerText = newBalanceTotal;   




});