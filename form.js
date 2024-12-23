let myForm = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrEl = document.getElementById("nameErr");

let emailEl = document.getElementById("email");
let emailErrEl = document.getElementById("emailErr");

let statusEl = document.getElementById("status");
let maleInputEl = document.getElementById("maleInput");
let femaleINputEl = document.getElementById("femaleInput");

let formData = {
    name : "",
    email :"",
    status : "Active",
    gender : "Male"
};

nameEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        nameErrEl.textContent = "Required*";
    }else{
        nameErrEl.textContent = "";
    }
    formData.name = event.target.value;
});
emailEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        emailErrEl.textContent = "Required*";
    }else{
        emailErrEl.textContent = "";
    }
    formData.email = event.target.value;
});

statusEl.addEventListener("change",function(event){
    formData.status = event.target.value;
});
maleInputEl.addEventListener("change",function(event){
   formData.gender = event.target.value;
});
femaleINputEl.addEventListener("change",function(event){
   formData.gender = event.target.value;
});


function validDataForm(formData){
    let {name, email} = formData;
    if(name === ""){
        nameErrEl.textContent = "Required*";
    }
    if(email === ""){
        emailErrEl.textContent="Required";
    }
}

function submitForm(formData){
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer fdf178fa5666df91836a69e52bb8147098c164305170ff2e67e8849880fbd18f",
        },
        body: JSON.stringify(formData)
      };
    let requesturl = "https://gorest.co.in/public-api/users";
    fetch(requesturl, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        if(jsonData.code === 422){
            if(jsonData.data[0].message === "has already been taken"){
                emailErrEl.textContent = "Email alrady has ben taken plase try anthor eamil";
            }
        }
    });
};


myForm.addEventListener("submit",function(event){
   event.preventDefault();
   validDataForm(formData);
   submitForm(formData);
});