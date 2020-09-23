/*
* Game of Life v0.5
* Author: Ivshin Pavel aka hacklun
*/

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

// Game setup
let cells = [];
for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(Math.round(Math.random()))
    }
    cells.push(row);
}

console.log(cells);

// Game loop
const timer = setInterval(() => {

}, 1000 / 60);