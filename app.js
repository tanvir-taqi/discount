

const priceInput = document.getElementById("price-input");
const newPriceElement = document.getElementById("new-price");

const tokenInput = document.getElementById('token');
const  btn = document.getElementById('token-btn');

btn.addEventListener('click' , function(){
   
 
const priceString = priceInput.value
const price = parseFloat(priceString)
if(isNaN(price)){
    alert("Please Enter a Number")
    newPriceElement.innerText ="00"
    priceInput.value = ''
}else{
    
if(tokenInput.value == "DOM"){
    const discount = price * 0.3 ;
    const newPrice = price - discount;
    newPriceElement.innerText = newPrice;

    const h5 = document.createElement('h5')
    h5.innerText = "Token is Used So Price is $" + newPrice;
    h5.classList.add('text-center')
    const header = document.getElementById("header")
    header.appendChild(h5);
    
    
}else {
    newPriceElement.innerText = price;
    const h5 = document.createElement('h5')
    h5.innerText = "Token is not Used So Price is $" + price;
    h5.classList.add('text-center')
    const header = document.getElementById("header")
    header.appendChild(h5);
    
}
priceInput.value = ''


tokenInput.value = ''
}





})