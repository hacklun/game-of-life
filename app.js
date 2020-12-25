/*
* Game of Life v0.8
* Author: Ivshin Pavel aka hacklun
*/

/*
Правила (взято с https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB)
    Место действия этой игры — «вселенная» — это размеченная на клетки поверхность или плоскость — безграничная, ограниченная, или замкнутая (в пределе — бесконечная плоскость).
    Каждая клетка на этой поверхности может находиться в двух состояниях: быть «живой» (заполненной) или быть «мёртвой» (пустой). Клетка имеет восемь соседей, окружающих её.
    Распределение живых клеток в начале игры называется первым поколением. Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам:
        в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
        если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)
    Игра прекращается, если
        на поле не останется ни одной «живой» клетки
        конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же на одном из более ранних шагов (складывается периодическая конфигурация)
        при очередном шаге ни одна из клеток не меняет своего состояния (складывается стабильная конфигурация; предыдущее правило, вырожденное до одного шага назад)

Эти простые правила приводят к огромному разнообразию форм, которые могут возникнуть в игре.

Игрок не принимает прямого участия в игре, а лишь расставляет или генерирует начальную конфигурацию «живых» клеток, которые затем взаимодействуют согласно правилам уже без его участия (он является наблюдателем).
 */

// Version 0.8 - implementation nextGeneration function

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

// Game setup
let cells = [];
const SIZE_CELL = 30;
for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(Math.round(Math.random()));
    }
    cells.push(row);
}
ctx.strokeStyle = "gray";

const draw = () => {
    let y = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (cells[i][j] === 1) {
                ctx.fillRect(j * SIZE_CELL, y, SIZE_CELL, SIZE_CELL);
            }
            ctx.strokeRect(j * SIZE_CELL, y, SIZE_CELL, SIZE_CELL);
        }
        y += SIZE_CELL;
    }
};

const isAlive = (x, y) => {
    if (cells[x][y] === 1) return true;
    return false;
}

const checkNeighbors = (x, y) => {
    let countNeighbors = 0;
    let xStep = -2;
    let yStep = -2;
    while (xStep < 1) {
        xStep++;
        if (x + xStep < 0 || x + xStep > 9) continue;
        while (yStep < 1) {
            yStep++;
            if (y + yStep < 0 || y + yStep > 9) continue;
            if (cells[x + xStep][y + yStep] === 1) countNeighbors++;
        }
        yStep = -2;
    }
    if (isAlive(x, y)) countNeighbors--;
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
    nextGeneration();
}, 1000 / 60);