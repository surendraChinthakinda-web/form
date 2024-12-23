let nameIn = document.getElementById("nameInput");
let nameError = document.getElementById("nameErr");
let displayMsg = document.getElementById("sentMsg");
let passError = document.getElementById("passErr")
let passWordEle = document.getElementById("pass");


function siginBtn(){
    let name = nameIn.value;
    let sent = "Hi " + name + " Your Account Benn Verfying...";
    displayMsg.textContent = sent;

}