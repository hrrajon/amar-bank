// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){

    // step-2
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-7
    depositField.value = '';

    //step-2.5
    if(isNaN(newDepositAmount)){
        alert('Please Inter A Number');
        return
    }

    // step-3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const currentBalanceTotal = currentDepositTotal + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
})