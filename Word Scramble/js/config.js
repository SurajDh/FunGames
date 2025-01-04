const crossElement=document.getElementById('cross');


crossElement.addEventListener('click',crossHide);



function crossHide(){
    overlayElement.style.display='none';
    initTimer();
    initGame();
};


