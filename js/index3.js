
const content = document.querySelector('.js-content')

let markup = '';
let player = 'X';
let stepX = [];
let step0 = [];
const win = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(let i = 1; i <= 9; i += 1) {
    markup += `<div class="js-item" data-id="${i}"></div>`;
}
// console.log(markup);

content.insertAdjacentHTML('beforeend', markup);
content.addEventListener('click', onClick);

function onClick(evt) {
    if(!evt.target.textContent) {
        const id = Number(evt.target.dataset.id);
        // console.log(evt.target.dataset.id);
        if(player === 'X') {
            stepX.push(id);
            // console.log('stepX', stepX)
            const isWinner = checkWinner(stepX);
            if(isWinner) {
                console.log(`Player ${player} is Winner`);
                resept();
                return;
            }
        } else {
            step0.push(id);
            // console.log('step0', step0)
            const isWinner = checkWinner(step0);
            if(isWinner) {
                console.log(`Player ${player} is Winner`);
                resept();
                return;
            }
        }

        evt.target.textContent = player;
        player = player === 'X' ? '0' : 'X';
    }
}

function checkWinner(arr) {
    const result = win.some(values => values
        .every(value => arr.includes(value)));
        return result;
}

function resept() {
    content.innerHTML = markup;
    stepX = [];
    step0 = [];
}






/////////////////////////////////////////////////
//////////////////// HOMEWORK ///////////////////

