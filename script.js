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
   //in the Element with the id items, select all the buttons
   

   const removeCartItemButtons = document.getElementsByClassName('btn-danger')
   //list in console an array of element with a class btn-danger
   // console.log(removeCartItemButtons)
   //loop through all the buttons in the array
   for ( i = 0; i < removeCartItemButtons.length; i++){
      const button = removeCartItemButtons[i]
      button.addEventListener('click', removeItem)
   }

   const quantityInput = document.getElementsByClassName('cart-quantity-input')
   for(i = 0; quantityInput.length; i++){
      const input = quantityInput[i]
      // console.log(input.value)
      input.addEventListener('change', quantityChanged)
   }

   const addButtons = document.getElementById('items').querySelectorAll('button')
   addButtons.forEach(button => {
      button.addEventListener('click', addToCart)
   });

   const btnPurchase = document.getElementsByClassName('btn-purchase')[0]
   btnPurchase.addEventListener('click', purchaseClicked)

   // Ex3: load function on img
   const buttonTools = document.getElementById('list-tools').querySelectorAll('div')
   for (var i = 0; i <  buttonTools.length; i++) {
      buttonTools[i].addEventListener('click', pickTools)
   };
}
function showCart(style) {
   document.getElementById('cart').style.display = style;
}
function addToCart(e){
   showCart("block")
   const button = e.currentTarget
   const title = (button.parentElement.parentElement.children[0]).innerText
   const price = button.parentElement.children[0]
   const priceNumber = Number((price.innerText).slice(1))
   // console.log(title, priceNumber)
   addItemToCart(title,priceNumber)
}
function addItemToCart(title,priceNumber){
   //create an element div
   const cartRow = document.createElement('div')
   cartRow.id = title
   //add a class to the element created
   cartRow.classList.add('cart-row')
   const cartItems = document.getElementsByClassName('cart-items')[0]
   const cartItemNames = document.getElementsByClassName('cart-item-title')
   
   for(i=0; i < cartItemNames.length; i++){
      //check if the text of the cartItem selected is the same as title
      if(cartItemNames[i].innerText == title){
         //alert('This item is already in your cart')
         const input = document.getElementById(title)
         let inputValue = Number(input.getElementsByClassName('cart-quantity-input')[0].value)
         //console.log(input, 'whatthe', inputValue)
         input.getElementsByClassName('cart-quantity-input')[0].value = inputValue + 1
         updateCartTotal() 
         return
      }
   }
   let cartRowContent = `
      <div class="cart-item cart-column">
         <span class="cart-item-title">${title}</span>
         </div>
         <span class="cart-price cart-column">${priceNumber}</span>
         <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
   cartRow.innerHTML = cartRowContent
   cartItems.append(cartRow)

   // get the first btn-danger addded in cartRow and add removeItem function
   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
   updateCartTotal()

}

function removeItem(e){
   const buttonRemove = e.currentTarget 
   buttonRemove.parentElement.parentElement.remove()
   console.log("remove")
   updateCartTotal()
}

function quantityChanged(e){
   const input = e.currentTarget
   if(isNaN(input.value) || input.value < 0){
      input.value = 1 
   }
   updateCartTotal()
}

function updateCartTotal(){
   //we want to look in each row, find the price and multiply with quantity
   const cartItemContainer = document.getElementsByClassName('cart-items')[0]
   //console.log(cartItemContainer)
   const cartRows = cartItemContainer.getElementsByClassName('cart-row')
   //console.log(cartRows)
   let total = 0
   for(i = 0; i < cartRows.length; i++){
      const cartRow = cartRows[i]
      const priceElement = cartRow.getElementsByClassName('cart-price')[0]
      const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      //console.log(priceElement, quantityElement)
      //get the text with innerText and transform into a Number, possibility to use parseFloat() and .slice()
      let price = Number(priceElement.innerText)
      //console.log(price)
      let quantity = quantityElement.value
      //console.log( price*quantity )
      total = total + (price * quantity)
      //console.log(total)
   }
   //round the total to 2 decimal max, Math.round function to the nearest integer, 
   // multiply by 100 then divide by 100 to always get a 2 decimal number
   total = Math.round(total * 100) / 100
   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function purchaseClicked(e){
   alert("thanks for your purchase")
   //get the cartItems because all the cart-rows are going to be added to it
   const cartItems = document.getElementsByClassName('cart-items')[0]
   //as long as there is children/node in the cartitems, remove thses children
   while (cartItems.hasChildNodes()){
      cartItems.removeChild(cartItems.firstChild)
   }
   updateCartTotal() 
   showCart("none")
}

//exercice3 

function pickTools(){
   let num = Math.floor(Math.random() * 3)+1
   // console.log(num)
   // console.log(this.id)
   let idTool = Number(this.id)
   // console.log(idTool)
   let tool
   let result
   //add an active class on the selected tool
   var active = document.getElementsByClassName("active");
    // If there's no active class
   if (active.length > 0) {
      active[0].className = active[0].className.replace(" active", "");
   }
    // Add the active class to the current/clicked button
   this.className += " active";
   switch (num){
      case 1: 
         tool= "scissors";
         if (num === idTool){
            result = "Same! Let's play again!"
         }
         else if (idTool === 3 ){
            result = "You are the winner!"
         }
         else{
            result = "I win!"
         }
         break;
      case 2: 
         tool= "paper";
         //console.log(num)

         if (num === idTool){
            result = "Same! Let's play again!"
         }
         else if (idTool === 1 ){
            result = "You are the winner!"
         }
         else{
            result = "I win!"
         }
         break;
      case 3: 
         tool= "rock";
         console.log(num)

         if (num === idTool){
            result = "Same! Let's play again!"
         }
         else if (idTool === 2 ){
            result = "You are the winner!"
         }
         else{
            result = "I win!"
         }
         break;
   }
   let myPickDiv = `<div class="card">${tool}<img src="img/${tool}.jpg" alt="${tool}"></div><div id="result">${result}</div>`
   document.getElementById("my-pick").innerHTML = myPickDiv
}