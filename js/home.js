console.log("total money got");
// add money to the account
// step1: add event hander
// prevent dafault

// step-2: get money to be added to the account balance
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money clicked");
    // step2: get money to the added account
    const addMoneyInput = document.getElementById("add-money-input").value;
    console.log(addMoneyInput);
    // get pin number provided
    const pinNumberInput = document.getElementById("add-pin-input").value;
    console.log(pinNumberInput);
  });
