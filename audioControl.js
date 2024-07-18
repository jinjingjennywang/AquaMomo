const audio = document.querySelector('audio');

const playButton = document.getElementById('play-instructions');

// play the audio as soon as the page loads, commented out for dev

window.addEventListener('load', function() {
    audio.play();
});


// listen again function 

playButton.addEventListener('click', function() {
    audio.play();
});
