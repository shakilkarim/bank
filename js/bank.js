function getInputValue(inputid){

        const inputField = document.getElementById(inputid);
        const inputText = inputField.value;
        const InputAmount = +inputText;

        //clear input field
        inputField.value = '';

        return InputAmount;
        
}
function updateTotalField(totalFieldId,depositeInputAmount){
    // debugger;
    const depositeAmount = document.getElementById(totalFieldId);
    const depositeTotalText = depositeAmount.innerHTML;
    const depoditeTotalAmount = +depositeTotalText;
    depositeAmount.innerHTML = depoditeTotalAmount + depositeInputAmount;
}
function updateBalance(Amount, isAdd){
        const balanceTotal =  document.getElementById('Total-amount');
        const balanceText = balanceTotal.innerHTML;
        const balnaceAmount = +balanceText;

        if(isAdd == true){
            balanceTotal.innerHTML = balnaceAmount + Amount;
        }else if(isAdd == false){
            balanceTotal.innerHTML = balnaceAmount - Amount;
        }
}



document.getElementById('deposite-button').addEventListener('click', function(){
      
        //deposite input field
        

        //deposite amount field
        // const depositeAmount = document.getElementById('deposite-amount');
        // const depositeTotalText = depositeAmount.innerHTML;
        // const depoditeTotalAmount = +depositeTotalText;
        // depositeAmount.innerHTML = depoditeTotalAmount + depositeInputAmount;
        
        //Update balance
        const depositeInputAmount = getInputValue('deposite-input');
        if(depositeInputAmount > 0){
            updateTotalField('deposite-amount',depositeInputAmount);
            updateBalance(depositeInputAmount, true); 
        }
          
        // const balanceTotal =  document.getElementById('Total-amount');
        // const balanceText = balanceTotal.innerHTML;
        // const balnaceAmount = +balanceText;

        // balanceTotal.innerHTML = balnaceAmount + depositeInputAmount;

});

//Withdraw section

document.getElementById('withdraw-submit').addEventListener('click',function(){
            
        //withdraw button section
        


        //withdraw main seciton
        // const mainWithdraw = document.getElementById('widthdraw');
        // const mainText = mainWithdraw.innerText;
        // const mainAmount = +mainText;
        // mainWithdraw.innerHTML = mainAmount + withdrwAmount;

       

        //update balance 
        const withdrwAmount = getInputValue('widthdraw-field');

        if(withdrwAmount > 0){
            updateTotalField('widthdraw',withdrwAmount);
            updateBalance(withdrwAmount, false); 
        }
        


        
});