//Shopping Bills Calculate.

let productName = "Wierless Mouse";
let price = 15;
let quantity = 4;
let taxPercent = 5;

let subTotal = price * quantity;
let textAmount = (subTotal * taxPercent)/100;
let grandTotal = subTotal + textAmount;

console.log("--------Shopping Bill---------");
console.log('Product Name:',productName);
console.log('Price per unit:',price);
console.log('Quantity:',quantity);
console.log('Subtotal:',subTotal);
console.log('Tax (5%):',textAmount);
console.log('Grand Total:',grandTotal);