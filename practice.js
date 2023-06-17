const num1=parseFloat(prompt("enter first number: "));
const num2=parseFloat(prompt("enter second number"));
const num3=parseFloat(prompt("enter third number"));
let largest;

if(num1>=num2 && num1>=num3){
    largest=num1;
}
else if(num2>=num1 && num2>=num3){
    largest=num2;
}
else{
    largest=num3;
}

document.write("largest number is" +largest);






