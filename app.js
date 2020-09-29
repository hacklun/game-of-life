/*
* Game of Life v0.7.3
* Author: Ivshin Pavel aka hacklun
*/

// Version 0.7 - implementation checkNeighbors function

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

// Game setup
let cells = [];
const SIZE_CELL = 30;
for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(Math.round(Math.random()))
    }
    cells.push(row);
}
ctx.strokeStyle = "gray";

const draw = () => {
    let y = 0;
    for (let i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            if (cells[i][j] === 1) {
                ctx.fillRect(j * SIZE_CELL, y, SIZE_CELL, SIZE_CELL);
            }
            ctx.strokeRect(j * SIZE_CELL, y, SIZE_CELL, SIZE_CELL);
        }
        y += SIZE_CELL;
    }
};

// todo add function isAlive

const checkNeighbors = (x, y) => {
    let countNeighbors = 0;2
    let xStep = -1;
    let yStep = -1;
    while (xStep < 2) {
        while (yStep < 2) {
            if (cells[x + xStep][y + yStep] === 1) countNeighbors++;
            yStep++;
        }
        xStep++;
    }
    /*if (cells[x - 1][y - 1] === 1) countNeighbors++;
    if (cells[x][y - 1] === 1) countNeighbors++;
    if (cells[x + 1][y - 1] === 1) countNeighbors++;
    if (cells[x - 1][y] === 1) countNeighbors++;
    if (cells[x + 1][y] === 1) countNeighbors++;
    if (cells[x - 1][y + 1] === 1) countNeighbors++;
    if (cells[x][y + 1] === 1) countNeighbors++;
    if (cells[x + 1][y + 1] === 1) countNeighbors++;*/

    return countNeighbors;
};

const nextGeneration = () => {

};

draw();
let count = checkNeighbors(5, 5);
    console.log(count);

// Game loop
const timer = setInterval(() => {
    draw();
    /*let count = checkNeighbors(5, 5);
    console.log(count);*/
    nextGeneration();
}, 1000 / 60);