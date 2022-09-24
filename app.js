const billAmount =  document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const calcButton = document.querySelector("#calculate-button");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#message");
const recipt = document.querySelector(".recipt");
const table = document.querySelector(".change-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashCollector = document.querySelector(".cash-collector");
const payOnline = document.querySelector(".pay-online");
var totalAmount = 0;

var notes = [2000, 500, 100, 20, 10, 5, 1];
table.style.display  = "none";
cashCollector.style.display  = "none";
payOnline.style.display = "none";
calcButton.style.display = "none";

// console.log(billAmount.value , cashGiven.value);

nextButton.addEventListener ("click", ()=> {
        if (checkBillAmount(billAmount.value)) {
            cashCollector.style.display  = "block";
            calcButton.style.display = "block";
            nextButton.style.display = "none";
        }
});

calcButton.addEventListener ("click", ()=> {
    if (!checkBillAmount(cashGiven.value)){
        return;
    }
    showMessage("");
    if (checkBillAmount(billAmount.value)) {
        clearOutputs();
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            table.style.display  = "block";
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            recipt.innerText ="Bill Paid. Thank you ! Visit Again !  Dont forget to collect your recipt! 🧾";
        } else if (billAmount.value === cashGiven.value) {
            showMessage("Nothing to be Returned!");
            recipt.innerText ="Bill Paid. Thank you ! Visit Again !  Dont forget to collect your recipt! 🧾";
        } else {
            showMessage("Out Of Cash? 💰");
            payOnline.style.display = "block"; //Pay online
        }
    }
});

function calculateChange(amt){
    showMessage("Amount to be returned💸: "+ amt);
    for (var i=0; i<notes.length;i++){
        const numOfNotes =  Math.trunc(amt/notes[i]); //returns integer part
        amt = amt%notes[i];
        noOfNotes[i].innerText = numOfNotes;
    }
}

function clearInput() {
    message.innerText = "";
    billAmount.value = "";
    cashGiven.value = "";
}

function showMessage (msg) {
    message.innerText = msg;
}

function clearOutputs(){
    payOnline.style.display = "none";
    table.style.display  = "none";
    recipt.innerText = "";
}

function checkBillAmount (amount) {
    clearOutputs();
    if(amount > 200000) {
        showMessage("To limit the usage of cash in high-value transactions, the government, under Section 269ST, prohibits anyone from accepting cash worth more than ₹ 2 lakh. ");
        return false;
    } else if (amount <= 0){
        showMessage("The Bill Amount & Cash Given should be greater than zer0.");
    } else if (amount > 0 && amount < 200000) {
        showMessage ("");
        return true;
    }

}