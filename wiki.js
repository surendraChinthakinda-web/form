let searchInputEl = document.getElementById("userInput");
let searchResultEl = document.getElementById("searchResult");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result){
    let {link, title, description} = result;

    let container = document.createElement("div");
    container.classList.add("ineer-container");

    let titleEl = document.createElement("h1");
    titleEl.textContent = title;
    titleEl.classList.add("title-heading");
    container.appendChild(titleEl);

    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.classList.add("link-heading")
    linkEl.target="_blank";
    linkEl.textContent = link;
    container.appendChild(linkEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("desc-heading");
    container.appendChild(descriptionEl);

    searchResultEl.appendChild(container);

}

function displayResult( search_results ){
    spinnerEl.classList.add("d-none");

    for (let result of search_results ) {
        createAndAppendSearchResult(result);
      }
}

function wikipidiaFn(event){
        if(event.key === "Enter"){
         spinnerEl.classList.remove("d-none");
           searchResultEl.textContent = "";
 
           let searchInput = searchInputEl.value;
           let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
            
           let option = {
             method : "GET"
           };
           fetch(url,option)
           .then(function(response){
             return response.json();
           })
           .then(function(jsonData){
             let { search_results  } = jsonData;
             displayResult(search_results );
           });
        }
 
}

searchInputEl.addEventListener("keydown", wikipidiaFn);