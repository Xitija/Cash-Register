const billAmount =  document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const calcButton = document.querySelector("#calculate-button");
const message = document.querySelector("#message");

// console.log(billAmount.value , cashGiven.value);

calcButton.addEventListener ("click", ()=> {
    message.innerText = "";
    if (billAmount.value > 0) {
        console.log(billAmount.value , cashGiven.value);
        console.log(cashGiven.value > billAmount.value);
        console.log(typeof cashGiven.value);
        console.log(typeof billAmount.value);
        if (cashGiven.value > billAmount.value) {
            console.log("HERE");
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            message.innerText = "Out Of Cash?";
        }
    } else {
        message.innerText = "The Bill Amount should be greater than zer0."
    } 
});

function calculateChange(amt){

}

function clearInput() {
    message.innerText = "";
    billAmount.value = "";
    cashGiven.value = "";
}
