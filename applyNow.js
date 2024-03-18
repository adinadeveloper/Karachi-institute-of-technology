const firstName = document.getElementById("fname").value
const lasttName = document.getElementById("lname");
const cnic = document.getElementById("cnic")
const Qualification = document.getElementById("Qualification");
const Gender = document.getElementById("Gender");
const addresse = document.getElementById("addresse");
const email = document.getElementById("email");
const form = document.getElementById("form");


form.addEventListener("click", (event) => {
    event.preventDefault();
   alert("are you sure you want to submit your form ?")
    window.location="./index.html"
    alert("your form is submited Now. ")
});
