document.getElementById('withdraw-btn').addEventListener('click',function(){

const withdrawInputValue=inputValueById('withdraw-input');
const withdrawTotalValue=elementValueById('withdraw-total');

const totalWithdraw=withdrawInputValue+withdrawTotalValue;
document.getElementById('withdraw-total').innerText=totalWithdraw;
const balanceTotalValue=elementValueById('balance-total');
if(balanceTotalValue<withdrawInputValue){
    alert('You have not enough money');
}
else
document.getElementById('balance-total').innerText=balanceTotalValue-withdrawInputValue;

})