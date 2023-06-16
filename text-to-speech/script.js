const button1=document.querySelector('.button');
const display=document.querySelector('.display');
const textA=document.querySelector('#textA');


let speech=new SpeechSynthesisUtterance();

function textToSpeech(){
    let text=textA.value.toString();
    display.innerHTML=text;
    speech.text=text;
    speech.rate=1;
    speech.volume=1;
    speech.pitch=1;
    speech.lang="en-US";
    speechSynthesis.speak(speech);
}

// textToSpeech();

button1.addEventListener('click',textToSpeech);