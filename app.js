const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

function clearInputFields() {
    reasonInput.value = '';
    amountInput.value = '';
    console.log('Input Fields cleared');
}
cancelBtn.addEventListener('click', () => {
    clearInputFields();
});

addBtn.addEventListener('click',() => {
    console.log('confirm clicked');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
        console.log('wrong input');
        alertCtrl.create({
            message: 'Please make sure reason and amount is not empty',
            header: 'Wrong Input',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });

        return;
    }
    console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': CHF ' + enteredAmount + '.-';
    expensesList.appendChild(newItem);
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = 'CHF ' + totalExpenses + '.-';
    clearInputFields()
});

