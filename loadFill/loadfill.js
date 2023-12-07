const count = document.querySelector('.load-count');
const wavetide = document.querySelectorAll('.waves');
const iNumber = document.getElementById('numberBox');

iNumber.addEventListener("submit", function(event) {
    event.preventDefault();
    var numero = document.getElementById("number").value;
    console.log(numero);
    this.reset();

    novoNumero = numero;
});

let novoNumero;
console.log(novoNumero);


let numeros = []
console.log(numeros)


for(let i = -1; i < novoNumero; i++) {
    numeros.push(i);
}




let i = -1;
 

const intervalId = setInterval(() => {
    if (i < numeros.length) {
        count.textContent = numeros[i]+'%';
        i++;
    } else {
        clearInterval(intervalId);
    }
}, 16);

setTimeout(intervalId, 5000)

function movetide() {
    wavetide.forEach(element => {
        element.style.top = '-100px';
    });
}

setTimeout(movetide, 2000);

function movetide() {
    let currentPosition = 340;
    const targetPosition = -100;
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