function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let date = document.getElementById("date").value;
  let color = document.getElementById("color").value;

  let isValid = true;
  if (name.trim() === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (phone.trim() === "") {
    document.getElementById("phoneError").innerHTML =
      "Phone number is required";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  if (age.trim() === "") {
    document.getElementById("ageError").innerHTML = "Age is required";
    isValid = false;
  } else {
    document.getElementById("ageError").innerHTML = "";
  }

  if (gender === "") {
    document.getElementById("genderError").innerHTML = "Gender is required";
    isValid = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  if (date === "") {
    document.getElementById("dateError").innerHTML = "Date is required";
    isValid = false;
  } else {
    document.getElementById("dateError").innerHTML = "";
  }

  if (color === "") {
    document.getElementById("colorError").innerHTML = "Color is required";
    isValid = false;
  } else {
    document.getElementById("colorError").innerHTML = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}

let form = document.getElementById("myForm");
form.addEventListener("submit", validateForm);
