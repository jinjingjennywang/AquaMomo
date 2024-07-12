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


let currentPhase = 0;

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