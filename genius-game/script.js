//! Ordem correta
let order = [];
//! Ordem dos cliques
let clickedOrder = [];
//! Pontuação
let score = 0;

//TODO 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul

//! Cores
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//! Gerando ordem da fase
let shuffleOrder = () => {
    //? Gerando número
    let colorOrder = Math.floor(Math.random() * 4);
    //? Quantidade de cores para selecionar
    order[order.length] = colorOrder;
    //? Meus cliques
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//! Acendendo a luz
let lightColor = (element, number) => {
    number = number*500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number-250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//! Verificando ordem correta
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] !== order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length === order.length){
        alert(`Pontuação: ${score}\nVocê acertou, próximo nível!`);
        nextLevel();
    }
}

//! Clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//! Retorno da cor
let createColorElement = (color) => {
    if(color === 0) return green;
    else if(color === 1) return red;
    else if(color === 2) return yellow;
    else if(color === 3) return blue;
}

//! Próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//! Caso perca
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

//! Iniciar
let playGame = () => {
    alert('Bem vindo ao jogo, iniciando o jogo');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(2));

playGame();