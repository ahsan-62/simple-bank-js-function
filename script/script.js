//1st step
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    const newDepositTotal = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositTotal;

    const balanceTotal=document.getElementById('balance-total');

    const balanceText=balanceTotal.innerText;

    const previousBalanceTotal=parseFloat(balanceText);
    const newBalanceTotal=previousBalanceTotal+depositAmount;
    balanceTotal.innerText=newBalanceTotal; 
});