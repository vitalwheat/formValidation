function checkForValidation() {
  window.onLoad = document.form.email.focus();
  const emailCheck = document.getElementById(
    "email"
  ).value;
  const cityCheck = document.getElementById(
    "city"
  ).value;
  const stateCheck = document.getElementById(
    "state"
  ).value;
  const zipCheck = document.getElementById("zip")
    .value;
  if (
    emailCheck.length < 3 ||
    !emailCheck.includes("@")
  ) {
    alert(
      "You entered " +
        "'" +
        document.getElementById("email").value +
        "'" +
        " as your email. It needs to be at least 3 characters and include an '@' to continue."
    );
  }
  if (cityCheck.length == 0) {
    alert("You must enter a city to continue.");
  }
  if (
    stateCheck.length < 2 ||
    stateCheck.length > 2
  ) {
    alert(
      "Please enter only the 2 letter abbreviation for your state to continue."
    );
  }
  if (zipCheck.length !== 5) {
    alert(
      "Please enter your 5 digit zip code to continue."
    );
  }
}
