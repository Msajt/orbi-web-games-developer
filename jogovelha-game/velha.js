let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

//! Escolhendo o quadrado
function escolherQuadrado(id){
    var quadrado = document.getElementById(id);
    
    //? Verificar se botão já foi clicado
    if(quadrado.innerHTML !== '-') return;

    //? Verificar se já houve vencedor
    if(vencedor !== null) return;
    
    //? Dados CSS/HTML do quadrado
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    //? Trocar estado X ou O
    (jogador === 'X') ? jogador = 'O' : jogador = 'X';
    mudarJogador(jogador);
    checaVencedor();

    //console.log('Clicou botão', id);
}

//! Muda o jogador
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

//! Verificar vencedor
function checaVencedor(){
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7');
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');

    //? Horizontal
    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    //? Vertical
    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    //? Diagonal
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

//! Exibe vencedor
function mudarVencedor(q){
    vencedor = q.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

//! Muda quadrado do vencedor
function mudaCorQuadrado(q1, q2, q3){
    q1.style.background = '#0F0';
    q2.style.background = '#0F0';
    q3.style.background = '#0F0';
}

//! Checando sequencia
function checaSequencia(q1, q2, q3){
    let eIgual = false;

    if(q1.innerHTML !== '-' && 
       q1.innerHTML === q2.innerHTML && 
       q2.innerHTML === q3.innerHTML) 
            eIgual = true;

    return eIgual;
}

//! Reiniciar o jogo
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(let i=1; i<=9; i++){
        let q = document.getElementById(i);
        q.style.background = '#eee';
        q.style.color = '#eee';
        q.innerHTML = '-';
    }

    mudarJogador('X');
}