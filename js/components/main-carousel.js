
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let aux = 100;

btnRight.addEventListener('click', function(){
    aux = aux + 100;
    elements.style = `transform: translateX(${aux}px)`
   
});

btnLeft.addEventListener('click', function(){
    aux = aux - 100;
    elements.style = `transform: translateX(${aux}px)`
});











