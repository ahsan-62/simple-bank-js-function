function inputValueById(iputId){
    const inputField = document.getElementById(iputId);
    const inputValueString=inputField.value;
    if(isNaN(inputValueString)){
        alert('please provide a valid number');
        inputField.value=' ';
        return false;
        
    }
    else{
    const inputValue=parseFloat(inputValueString);
    inputField.value=' ';
    return inputValue;
    }
    
}

function elementValueById(elementId){

    const elementValue=document.getElementById(elementId);
    const elementValueString=elementValue.innerText;
    const elementValueNumber=parseFloat(elementValueString);
    return elementValueNumber;

    }

document.getElementById('deposit-btn').addEventListener('click',function(){
    
    
   const inputTotalValue=inputValueById('deposit-input');
   const elementTotalValue=elementValueById('deposit-total');
   const totalAmount=inputTotalValue+elementTotalValue;
   document.getElementById('deposit-total').innerText=totalAmount;
   const balanceTotalValue=elementValueById('balance-total');
   document.getElementById('balance-total').innerText=balanceTotalValue+inputTotalValue;

})