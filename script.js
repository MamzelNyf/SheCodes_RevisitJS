//Exercice 1
function changeNumber(n){
let number = parseInt(document.getElementById('number').value,10);
isNaN(number) ?  number = "Enter a number" : number += n; 
document.getElementById('number').value = number
}

function decrementValue(){
   changeNumber(-1)
}
function incrementValue(){
   changeNumber(1)
}

//Exercice 2
window.onload = () => {
   const buttons = document.getElementById('items').querySelectorAll('button')
   buttons.forEach(button => {
      button.addEventListener('click', addToCart)
   })
}

function addToCart(e){
   const button = e.currentTarget
   const paragraph = button.parentElement.children[0]
   console.log(paragraph.innerText)
   var li = document.createElement("li");
   var t = document.createTextNode(paragraph.innerText);
   li.appendChild(t);
   document.getElementById("cart").appendChild(li);

}


