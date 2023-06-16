// const divOne=document.querySelector('#divOne')
// const divElement=document.createElement('div');
// divElement.className='divTwo';
// divElement.setAttribute('id','red-div')
// divElement.innerHTML="Cup";
// divOne.append("Look","hiiii")
// divOne.appendChild(divElement);
// const h2One=divOne.querySelector('#h2One');
// // divOne.insertBefore(divElement,h2One);


// const v1=document.querySelector('#vOne');

// v1.addEventListener('click',function(){
//    onWork("click");
// })
// v1.addEventListener('focus',function(){
//    onWork("focus");
// })
// v1.addEventListener('blur',function(){
//    onWork("blur");
// })
// v1.addEventListener('onfocus',function(){
//    onWork("onfocus");
// })

// function onWork(val){
//     document.getElementById('h1One').innerHTML=val;
// }

// document.title="hello";

// console.log(document.all);

// for(let i of document.all){
//     console.log(i); 
// }

// console.log(document.fonts);

// let items=document.querySelectorAll('.items');

// console.log(items);

// for(let j of items){
//    let item=j.querySelectorAll('.item');
//    // console.log(item.lastchild);
//    // item.style.color='green'
//    let count=0;
//    for(let k of item){
//       count++;
//       if(count%2==0){
//          k.style.color='red'
//          // console.log(count);
//       }
//    }
// }

// let item=document.querySelectorAll('.item:last-child');
// // console.log(item);
// for (const i of item) {
//    i.style.color="green"
// }


// let itemOne=document.querySelectorAll('.item')[7];
// itemOne.style.color="red"; 
// console.log(itemOne);


// let itemAll = document.querySelectorAll('.item');

// for (const item of itemAll) {
//    setTimeout(() => {
//       item.style.color="red";
//    }, 2000);
// }

// for (const item of itemAll){
// }

let item=document.querySelectorAll('.item');

let count=0;
function animation() {
   if(!count==0){
      item[count-1].style.color='black';
   }
   if(count<item.length){
      item[count].style.color='red';
      count++;
   }
   else{
      clearInterval(setI);
      console.log(`close interval`);
      count=0;
   }
}

const setI=setInterval(animation,1000);


let showId=document.querySelector('#showId');

document.addEventListener('keypress',function(eve) {
   showId.innerHTML=eve.key;
})

let ns1=item[2].nextElementSibling;
ns1.innerHTML="hi";
let ns2=ns1.nextElementSibling;
let ps3=ns2.previousElementSibling;
ps3.innerHTML="look"

let pre1=ps3.parentElement;
// pre1.style.backgroundColor='yellow'
console.log(pre1);
let ch1=pre1.children[2];
console.log(ch1);



let crudDiv=document.querySelector('.crudDiv');
let createP=document.createElement('p');
// createP.textContent="Ma name is..."
let TextN=document.createTextNode("You are ...");
createP.appendChild(TextN);
// crudDiv.appendChild(CreateP);
// crudDiv.removeChild(CreateP);
let h3Last=crudDiv.querySelector('h3');
crudDiv.insertBefore(createP,h3Last);
createP.className='test1';
createP.attrib

