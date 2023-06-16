let h1=document.querySelector('h1')
document.querySelector('button').addEventListener('click',function() {
    h1.addEventListener('click',function() {
        h1.innerHTML="hello";
        // h1.style.backgroundColor='yellow';
        h1.classList.add('bgc');
    })
})


var div=document.getElementById('div');
var heading3=document.createElement('h3');
var text=document.createTextNode("this is heading 3");

heading3.appendChild(text)
div.appendChild(heading3); 

var h2=document.getElementsByTagName('h2')[1];
div.removeChild(h2);


var heading1=document.createElement('h1');
var text1=document.createTextNode("this is heading 1");
var h0=document.getElementsByTagName('h2')[0];
heading1.appendChild(text1);
div.insertBefore(heading1,h0);