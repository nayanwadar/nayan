// Name validation
function validateName(){
let name=document.getElementById("name").value.trim();
if(name.length<3){
document.getElementById("nameError").innerHTML="Name must be at least 3 characters";
return false;
}
else{
document.getElementById("nameError").innerHTML="";
return true;
}
}
// Email validation
function validateEmail(){
let email=document.getElementById("email").value;
let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!pattern.test(email)){
document.getElementById("emailError").innerHTML="Invalid email";
return false;
}
else{
document.getElementById("emailError").innerHTML="";
return true;
}
}
// Age validation
function validateAge(){
let age=document.getElementById("age").value;
if(age<1 || age>120){

document.getElementById("ageError").innerHTML="Enter valid age";
return false;
}
else{
document.getElementById("ageError").innerHTML="";
return true;
}
}
// Calculate doctor fees dynamically
function calculateFees(){
let doctor=document.getElementById("doctor").value;
document.getElementById("fees").value=doctor;
let message=document.getElementById("message");
message.innerHTML="";
let note=document.createElement("p");
note.innerText="Doctor selected successfully";
note.setAttribute("style","color:blue");
message.appendChild(note);
}
// Submit form
function submitForm(){
let nameValid=validateName();
let emailValid=validateEmail();
let ageValid=validateAge();
if(!nameValid || !emailValid || !ageValid){
alert("Please correct errors");
return false;
}
let message=document.getElementById("message");
message.innerHTML="";
let success=document.createElement("p");
success.innerText="Appointment Booked Successfully";

message.appendChild(success);
return false;
}
// Clear form
function clearForm(){
document.getElementById("appointmentForm").reset();
document.getElementById("message").innerHTML="";
}
// Title hover effect
document.querySelector("#title").onmouseover=function(){
this.setAttribute("style","color:red");
}
document.querySelector("#title").onmouseout=function(){
this.setAttribute("style","color:black");