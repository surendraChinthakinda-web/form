let container = document.getElementById("myContainer");

let h = document.createElement("h1");
h.textContent = "Web Technologies";
container.appendChild(h);

let changeBtn = document.createElement("button");
changeBtn.textContent = "Adding heading color";
container.appendChild(changeBtn);

changeBtn.onclick = function(){
    h.textContent = "2.0 Web Technologies";
    h.classList.add("heading");
}


let removeBtn = document.createElement("button");
removeBtn.textContent = "remove heading color";
container.appendChild(removeBtn);

removeBtn.onclick = function(){
    h.classList.remove("heading");
    h.textContent = "Web Technologies";
}
