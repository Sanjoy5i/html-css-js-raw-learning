const slideshowElements=document.querySelectorAll(".slideshow-element");


let countElements=1;
setInterval(() => {
    countElements++;
    let currentElements=document.querySelector(".current");
    currentElements.classList.remove("current");
    if(countElements>slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElements=1;
    }
    else{
        currentElements.nextElementSibling.classList.add("current");
    }
}, 2000);