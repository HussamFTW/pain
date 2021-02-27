const soundbtn = document.querySelector(".play-sound-btn");
let myAudio = document.querySelector("#audio");
soundbtn.addEventListener("click",()=>{
 myAudio.play(); //play the audio after click.
});
