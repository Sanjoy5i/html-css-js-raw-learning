const text = document.getElementById('text');
const display = document.getElementById('display');


document.getElementById('add').addEventListener('click',()=>{
  if(text.value){
    const p = document.createElement('p');
    p.innerHTML = text.value + "<b style='color:red; cursor:pointer'> &#9003</b>";
    p.style.fontSize='20pt'
    display.appendChild(p);
    p.addEventListener('click',()=>{
      display.removeChild(p);
    })
  }
  else{
    alert("please enter text.");
  }
});

// display.innerHTML="<i>&#9003</i>"