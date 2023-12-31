const count = document.querySelector('.load-count');
const wavetide = document.querySelectorAll('.waves');
const iNumber = document.getElementById('numberBox');

let numeros = [];
let numero;

iNumber.addEventListener('submit', function(event){
    event.preventDefault();
    numero = document.getElementById('number').value;

    numeros = [];

    for (let index = 0; index <= numero; index++) {
        numeros.push(index);
    }

    console.log(numero);
    this.reset();

    let i = 0;

    const intervalId = setInterval(() => {
    if (i < numeros.length) {
        count.textContent = numeros[i]+'%';
        i++;
    } else {
        clearInterval(intervalId);
    }
    }, 16);
});





// -----------------------prototype---------------------------------------
// const numeros = [
//     0,1,2,3,4,5,6,7,8,9,10,
//     11,12,13,14,15,16,17,18,19,20,
//     21,22,23,24,25,26,27,28,29,30,
//     31,32,33,34,35,36,37,38,39,40,
//     41,42,43,44,45,46,47,48,49,50,
//     51,52,53,54,55,56,57,58,59,60,
//     61,62,63,64,65,66,67,68,69,70,
//     71,72,73,74,75,76,77,78,79,80,
//     81,82,83,84,85,86,87,88,89,90,
//     91,92,93,94,95,96,97,98,99,100
// ]

// let i = -1;
 

// const intervalId = setInterval(() => {
//     if (i < numeros.length) {
//         count.textContent = numeros[i];
//         i++;
//     } else {
//         clearInterval(intervalId);
//     }
// }, 16);

// setTimeout(intervalId, 5000);

// function movetide() {
//     wavetide.forEach(element => {
//         element.style.top = '-100px';
//     });
// }

// setTimeout(movetide, 2000);
// --------------------------------------------------------------------
function movetide() {
    let currentPosition = 340;
    const targetPosition = numeros;
    const increment = -1;

    function moveStep() {
        currentPosition += increment;
        wavetide.forEach(element => {
            element.style.top = `${currentPosition}px`;
        });

        if (currentPosition > targetPosition) {
            setTimeout(moveStep, 1);
        }
    }

    moveStep();
}

setTimeout(movetide, 0);