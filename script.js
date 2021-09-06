  let form = document.querySelector(".form");
  form.addEventListener("submit",convert)

function convert(e){
    e.preventDefault()
    let number = document.getElementById("number").value
let result = (+number*9/5) +32;
let outputElement = document.querySelector(".converted-amount");
outputElement.textContent=result  
}