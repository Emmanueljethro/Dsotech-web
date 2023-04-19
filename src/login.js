// const submit_button = document.querySelector(".button");
// all input data received this variables
// const fname = document.getElementById("fname").value;
// const lname = document.getElementById("lname").value;
const email = document.getElementById("Email");
const pass = document.getElementById("pass");
// const cpass = document.getElementById("cpass").value;



// select the submit button element
const loginBtn = document.querySelector('#login-btn');

// add an event listener for the click event
loginBtn.addEventListener('click', function() { 
    // alert ("is not match")
  // check if the condition is met
  if (email.value == "emmanuelpamilerin8@gmail.com" && pass.value == "jethro") {
    // redirect to the specified page
    window.location.href = './index.html';
    alert("it correct")
  } else {
    email.style.border = "3px solid red"
    // fname.style.border = "3px solid red"
    // lname.style.border = "3px solid red"
    pass.style.border = "3px solid red"
    // cpass.style.border = "3px solid red"


    // console.log(email);
    console.log('Condition not met!');
    // console.log(fname.value);
    // console.log(lname.value);
    console.log(email.value);
    console.log(pass.value);
    // console.log(cpass.value);
  }
});