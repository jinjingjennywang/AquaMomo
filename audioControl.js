// assign each html audio to a variable 
const audioStartPrac = document.getElementById('audioStartPrac');
const audioPrac1 = document.getElementById('audioPrac1');
const audioPrac2 = document.getElementById('audioPrac2');
const audioStartTrial = document.getElementById('audioStartTrial');
const audioTrial1 = document.getElementById('audioTrial1');
const audioEnd = document.getElementById('audioEnd');

// trials 2-24 can go into an array to loop thru for better code readability

const audioTrials = ['mp3/3orange.mp3', 'mp3/5strawberry.mp3', 'mp3/2banana.mp3', 'mp3/10orange.mp3', 
    'mp3/4strawberry.mp3', 'mp3/2banana.mp3', 'mp3/4orange.mp3', 'mp3/1strawberry.mp3', 'mp3/3banana.mp3',
    'mp3/10orange.mp3', 'mp3/5strawberry.mp3', 'mp3/4banana.mp3', 'mp3/5orange.mp3', 'mp3/1strawberry.mp3',
    'mp3/3banana.mp3', 'mp3/10orange.mp3', 'mp3/2strawberry.mp3', 'mp3/1banana.mp3', 'mp3/10orange.mp3',
    'mp3/3strawberry.mp3', 'mp3/2banana.mp3', 'mp3/5orange.mp3', 'mp3/4strawberry.mp3'];




// play the audio as soon as the page loads, commented out for dev
document.getElementById('instructions').click();

window.addEventListener('load', function() {
    // play the p1cookie.mp3 audio
    audioStartPrac.play();
    audioStartPrac.addEventListener('ended', function() {
        audioPrac1.play();
    });
    nextPhaseCounter++;
});


// listen again function and button 
const playButton = document.getElementById('play-instructions');

playButton.addEventListener('click', function() {
    audio.play();
});

// everytime the phase button is pressed an audio has to play that corresponds to the fruit and the number

// option 1, correspond to the amount of times the next phase button is pressed and each time its pressed we iterate thru the audios
// the audios MUST autoplay
let nextPhaseCounter = 0;



// for the rest of the trials

const audioTrialPlayer = document.getElementById('trialPlayer');

function playNextTrial() {
    if (nextPhaseCounter < audioTrials.length + 3) {
        audioTrialPlayer.src = audioTrials[nextPhaseCounter - 3];
        audioTrialPlayer.play();
    }
}



const nextPhaseButtonAudio = document.getElementById('next-phase');

nextPhaseButtonAudio.addEventListener('click', function() {
    if (nextPhaseCounter === 0) {
        
    } else if (nextPhaseCounter === 1) {
        // play the p2cookie.mp3 audio
        audioPrac2.play();
    } else if (nextPhaseCounter === 2) {
        audioStartTrial.play();
        audioStartTrial.addEventListener('ended', function() { 
            audioTrial1.play();
        });
    } else if (nextPhaseCounter === 26) {
        audioEnd.play();
    } else{
        playNextTrial();
    }
    nextPhaseCounter++;
});