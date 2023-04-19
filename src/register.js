const submit_button = document.querySelector(".button");

 // all input data received this variables
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");

// now store this data in your web browser store
// localStorage.setItem('FirstName', fname);
//  localStorage.setItem('LastName', lname);
//  localStorage.setItem('Email', email);
//  localStorage.setItem('Password', pass);
//  localStorage.setItem('Cpassword', cpass);

// submit_button.onclick = () => {
// // submit_button.onclick = (e) => {
//     // e.preventDefault();

   

//     // now write some condition
//     if(fname == "jethro" && lname == "faith" && email == "jethro@gmail.com" && pass == "jethro" && cpass == "jethro"){
//         // let's change this alert system
//         // alert("Input field has no value");
//     }
//     else {
//         if(pass !== cpass){
//             // alert("password not matching");
//         }
//         else{
//             // alert('registration successful');
//         }
//     }
// }


 // LOGIN FORM


//  const login = document.querySelector('.login');
// //  login.onclick = (e) => {
//     //  e.preventDefault();
 
//      // cautch the value which is type user login page
//      const emailAddress = document.getElementById("email").value;
//      const passWord = document.getElementById("pass").value;
 
//      // let's get value in localStorage which store user in registration form
//      const Email =  localStorage.getItem("Email");
//      const Password =  localStorage.getItem("Password");
 
 
//      if(emailAddress == "" && passWord == ""){
//         //  alert("Input field has no value");
//      }
//      else {
//          if(emailAddress == Email && passWord == Password){
//             //  alert('registration successful');
//             }
//             else {
//                 // alert('Something is wrong!');
//             }
//         }
        
// select the submit button element
const submitBtn = document.querySelector('#submit-btn');

// add an event listener for the click event
submitBtn.addEventListener('click', function() { 
    // alert ("is not match")
  // check if the condition is met
  if (fname.value == "jethro" && lname.value == "faith" && email.value == "emmanuelpamilerin8@gmail.com" && pass.value == "jethro" && cpass.value == "jethro") {
    // redirect to the specified page
    window.location.href = './index.html';
    alert("it correct")
  } else {
    email.style.border = "3px solid red"
    fname.style.border = "3px solid red"
    lname.style.border = "3px solid red"
    pass.style.border = "3px solid red"
    cpass.style.border = "3px solid red"


    console.log(email);
    console.log('Condition not met!');
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(pass.value);
    console.log(cpass.value);
  }
});
