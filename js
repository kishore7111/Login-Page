function validateForm() {
  var x = document.forms["login-form"]["username"].value;
  var y = document.forms["login-form"]["password"].value;
  if (x == "" || y == "") {
    alert("Both fields must be filled out");
    return false;
  }
}
