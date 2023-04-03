const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email"); 
const phone = document.getElementById("phone");
const year = document.getElementById("year");
const collegename = document.getElementById("college");
const checkbox = document.getElementById("checkbox");

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.classname = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classname = "form-control success";
}

function checkEmail() {
  if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  } 
}

function checkPhone() {
  if (phone.value == "") {
    alert("Please enter your Phone number.");
    phone.focus();
    return false;
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUppercase() + input.id.slice(1);
}

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  })
}

function checkLength(input, max) {
  if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be at least ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkYear() {
  if (select.selectedIndex < 1) {
    alert("Please enter your graduation year.");
    select.focus();
    return false;
  }
}

function valcheckbox() {
  var isChecked = false;
  for(var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      isChecked = true;
    };
  };
  if (isChecked) {
    alert("At least one checkbox checked!");
  } else {
    alert("Please check at least one checkbox!");
  }
}
