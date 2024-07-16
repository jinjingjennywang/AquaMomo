// initial state of showing 15 fruits

const initialContainer = document.getElementById('fruit-container');
const endContainer = document.getElementById('fruit-plate');

// function to populate images array of fruits

function popFruits(fruitTypes) {
    let fruitCount = 15;
    let fruits = [];

    // loop thru each fruit type and add 15 of each to their own inner array based on their type
    // then push that inner array to the fruits array

    fruitTypes.forEach(fruitType => {
        let innerArray = [];
        for (let i = 0; i < fruitCount; i++) {
            innerArray.push(fruitType);
        }
        fruits.push(innerArray);
    })


    return fruits;

    // fruitTypes.forEach(fruitType => {
    //     for (let i = 0; i < fruitCount; i++) {
    //         fruits.push(fruitType);
    //     }
    // });

    // RETURNS EX: 
    // let fruits = [
    //     ['Strawberry.png'] x 15,
    //     ['Banana.png'] x 15,
    //     ['Orange.png'] x 15,
    // ];
}

// *** CHANGE & ADD FRUITS HERE ***

const initFruitTypes = ['Strawberry.png', 'Banana.png', 'Orange.png'];

const fruits = popFruits(initFruitTypes);



let currentPhase = 0;

// display fruits in the initial container

function setFruits(imagePaths) {
    // clear container if there are still leftover fruits from last phase
    initialContainer.innerHTML = '';


    imagePaths.forEach(imagePath => {
        const fruit = document.createElement('div');
        fruit.className = 'fruit';
        fruit.style.backgroundImage = `url(${imagePath})`;
        initialContainer.appendChild(fruit);
    })
}

setFruits(fruits[currentPhase]);

// movement logic 
// function to move fruits from initial container to end container

function moveFruits() {
    if (initialContainer.children.length > 0) {
        // select the last fruit in the initial container
        const fruit = initialContainer.children[initialContainer.children.length - 1];
        endContainer.appendChild(fruit);
    }
}

// use spacebar to trigger moveFruits()

document.addEventListener('keypress', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();

        moveFruits();
    }
});

// use button to trigger moveFruits()

const moveFruitButton = document.getElementById('add-fruit');

moveFruitButton.addEventListener('click', function() {
    moveFruits();
});

// remove fruit from end container and put back into initial container

function removeFruits() {
    if (endContainer.children.length > 0) {
        const fruit = endContainer.children[endContainer.children.length - 1];
        initialContainer.appendChild(fruit);
    }

}

// use button to trigger removeFruits()

const removeFruitButton = document.getElementById('remove-fruit');

removeFruitButton.addEventListener('click', function() {
    removeFruits();
});

// clear fruit from end container and restore all fruits back to initial container

function clearFruits() {
    while (endContainer.children.length > 0) {
        const fruit = endContainer.children[0];
        initialContainer.appendChild(fruit);
    }
}

// use R key to trigger clearFruits()

document.addEventListener('keypress', function(event) {
    if (event.code === 'KeyR') {
        event.preventDefault();

        clearFruits();
    }
});

// use button to trigger clearFruits()

const clearFruitButton = document.getElementById('clear-fruit');

clearFruitButton.addEventListener('click', function() {
    clearFruits();
});

// prevent spacebar from triggering the buttons

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('keypress', event => {
        if (event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            event.target.blur();
        }
    })
});

// *** PHASE LOGIC ***

let numberOrder = [1, 3, 5, 2, 10, 4, 2, 4, 1, 3, 10, 5, 4, 5, 1, 3, 10, 2, 1, 10, 3, 2, 5, 4];

const displayNum = document.getElementById('display-num');
const nextPhaseButton = document.getElementById('next-phase');

let currentIndex = 0;
let childOrder = [];

displayNum.textContent = numberOrder[currentIndex];

// function to change phase

function changePhase() {
    if (currentIndex < numberOrder.length) {
        // add the number of fruits the child put to the childOrder array
        childOrder.push(endContainer.children.length);
        
        // change the fruits to the next phase
        currentPhase = (currentPhase + 1) % 3;

        // clear all the fruits & add new fruits
        endContainer.innerHTML = '';
        setFruits(fruits[currentPhase]);
        

        // move to the next number in the numberOrder array
        currentIndex++;
        displayNum.textContent = numberOrder[currentIndex];

        console.log(childOrder);

       
        

    } else {
        displayNum.textContent = 'All done!';
    }
}

// use button to trigger changePhase()

nextPhaseButton.addEventListener('click', function() {
    changePhase();
});