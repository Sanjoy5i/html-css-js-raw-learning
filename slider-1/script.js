function prev() {
    if(document.getElementsByClassName('slider')[3].classList.contains("active")){
        document.getElementsByClassName('slider')[2].classList.add("active");
        document.getElementsByClassName('slider')[3].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[2].classList.contains("active")){
        document.getElementsByClassName('slider')[1].classList.add("active");
        document.getElementsByClassName('slider')[2].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[1].classList.contains("active")){
        document.getElementsByClassName('slider')[0].classList.add("active");
        document.getElementsByClassName('slider')[1].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[0].classList.contains("active")){
        document.getElementsByClassName('slider')[3].classList.add("active");
        document.getElementsByClassName('slider')[0].classList.remove("active");
    }
}

function next() {
    if(document.getElementsByClassName('slider')[0].classList.contains("active")){
        document.getElementsByClassName('slider')[1].classList.add("active");
        document.getElementsByClassName('slider')[0].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[1].classList.contains("active")){
        document.getElementsByClassName('slider')[2].classList.add("active");
        document.getElementsByClassName('slider')[1].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[2].classList.contains("active")){
        document.getElementsByClassName('slider')[3].classList.add("active");
        document.getElementsByClassName('slider')[2].classList.remove("active");
    }
    else if(document.getElementsByClassName('slider')[3].classList.contains("active")){
        document.getElementsByClassName('slider')[0].classList.add("active");
        document.getElementsByClassName('slider')[3].classList.remove("active");
    }
}

setInterval(() => {
    next();
}, 3000);
