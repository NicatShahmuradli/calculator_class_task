let buttons = document.getElementsByTagName('button');
let result = document.querySelector('.result p') 


let btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", function(){
    result.innerText += btn1.innerText
})

let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", function(){
    result.innerText += btn2.innerText
})

let btn3 = document.querySelector(".btn3")
btn3.addEventListener("click", function(){
    result.innerText += btn3.innerText
})

let btn4 = document.querySelector(".btn4")
btn4.addEventListener("click", function(){
    result.innerText += btn4.innerText
})

let btn5 = document.querySelector(".btn5")
btn5.addEventListener("click", function(){
    result.innerText += btn5.innerText
})

let btn6 = document.querySelector(".btn6")
btn6.addEventListener("click", function(){
    result.innerText += btn6.innerText
})

let btn7 = document.querySelector(".btn7")
btn7.addEventListener("click", function(){
    result.innerText += btn7.innerText
})

let btn8 = document.querySelector(".btn8")
btn8.addEventListener("click", function(){
    result.innerText += btn8.innerText
})

let btn9 = document.querySelector(".btn9")
btn9.addEventListener("click", function(){
    result.innerText += btn9.innerText
})

let double = document.querySelector(".double")
double.addEventListener("click", function(){
    result.innerText += double.innerText
})


let AC = document.querySelector(".AC")
AC.addEventListener("click", function(){
    result.innerText = "";
})

let C = document.querySelector(".C")
C.addEventListener("click", function(){
    let currentText = result.innerText;
    result.innerText = currentText.slice(0, -1);
})

let btn10 = document.querySelector(".btn10")
btn10.addEventListener("click", function(){
    result.innerText += btn10.innerText
})


let operator1 = document.querySelector(".operator1")
operator1.addEventListener("click", function(){
    result.innerText += operator1.innerText
})

let operator2 = document.querySelector(".operator2")
operator2.addEventListener("click", function(){
    
})

let operator3 = document.querySelector(".operator3")
operator3.addEventListener("click", function(){
    result.innerText += operator3.innerText
})

let operator4 = document.querySelector(".operator4")
operator4.addEventListener("click", function(){
    result.innerText += operator4.innerText
})

let operator5 = document.querySelector(".operator5")
operator5.addEventListener("click", function(){
    let currentText = result.innerText;
    let sum = eval(currentText);
    result.innerText = sum;
})

let point = document.querySelector(".point")
point.addEventListener("click", function(){
    result.innerText += point.innerText
})




