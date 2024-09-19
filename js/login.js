// console.log("butn file added");
// step-1 : set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default browerser relaod
    event.preventDefault();
    console.log("login button clicked");
    // step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    // step-4: validate phone and pin
    if (phoneNumber === "6" && pinNumber === "1234") {
      console.log("youre logged in");
      window.location.href = "/hompage.html";
    } else {
      alert("please good pin den");
    }
  });
