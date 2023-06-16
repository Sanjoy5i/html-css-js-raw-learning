const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
div1.addEventListener('mouseover', (e) => {
    div2.innerHTML = 'hello'
})
div1.addEventListener('mouseout', (e) => {
    div2.innerHTML = 'div2'
})




try {
    var input1 = document.querySelector('#input1');
    var submit1 = document.querySelector('#submit1');
    var pre1 = document.querySelector('#pre1');
    submit1.addEventListener('click', function () {
        try {
            let inputValue = input1.value;
            if (inputValue < 1) {
                throw "Input is low";
            } else if (inputValue > 5) {
                throw "Input is hi";
            }
            else {
                pre1.innerHTML = "value is ok";
            }
        } catch (error) {
            pre1.innerHTML = error;
        }
    })
} catch (error) {
    // console.log(error);
} finally {}

let tooltipDiv1=document.getElementsByClassName('tooltipDiv');
let tooltipButton=tooltipDiv1.querySelector('button');
let tooltipP=tooltipDiv1.querySelector('p');

console.log(tooltipDiv1)

tooltipButton.addEventListener('click',function() {
    tooltipP.innerHTML="hello";
})