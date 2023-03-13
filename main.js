const botaoSorteiaJogador = document.querySelector('.botao__sortear-jogador');
let jogadorSorteado;
let jogadorDaVezSorteado = false;
let jogadores = ['X', 'O'];
let spanJogador = document.querySelector('.vez__jogador');
const botaoNovoJogo = document.querySelector('.botao__novo-jogo');
const tabuleiro = document.querySelector('.container__tabuleiro');
const botaoTabuleiro = document.querySelectorAll('.tabuleiro__botao');
let ganhador = false;

botaoSorteiaJogador.addEventListener('click', () => {
    jogadorSorteado = parseInt(Math.random() * 2);
    jogadorDaVezSorteado = true;
    spanJogador.textContent = 'O jogador da vez é ' + jogadores[jogadorSorteado];
})

const botaoIniciaJogo = document.querySelector('.botao__iniciar-jogo');

botaoIniciaJogo.addEventListener('click', () => {
    if (jogadorDaVezSorteado) {
        tabuleiro.classList.add('container__tabuleiro-ativo');
        botaoSorteiaJogador.classList.add('botao__sortear-jogador-inativo');
        botaoIniciaJogo.classList.add('botao__iniciar-jogo-inativo');
        botaoNovoJogo.classList.add('botao__novo-jogo-ativo');
        jogadorDaVezSorteado = false;
    } else {
        spanJogador.textContent = 'O jogador da vez precisa ser sorteado';
    }
})

botaoNovoJogo.addEventListener('click', () => {
    tabuleiro.classList.remove('container__tabuleiro-ativo');
    botaoSorteiaJogador.classList.remove('botao__sortear-jogador-inativo');
    botaoIniciaJogo.classList.remove('botao__iniciar-jogo-inativo');
    botaoNovoJogo.classList.remove('botao__novo-jogo-ativo');
    jogadorSorteado = undefined;
    spanJogador.textContent = '';
    botaoTabuleiro.forEach(botao => botao.textContent = '');
    ganhador = false;
})



botaoTabuleiro.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.textContent == '' && !ganhador) {
            botao.textContent = jogadores[jogadorSorteado];
            ganhador = verificaGanhador(); 
            if (ganhador == true) {
                spanJogador.textContent = 'O jogador vencedor é ' + jogadores[jogadorSorteado];
            } else {
                if (jogadorSorteado == 0) {
                    jogadorSorteado = 1;
                } else {
                    jogadorSorteado = 0;
                }
                spanJogador.textContent = 'O jogador da vez é ' + jogadores[jogadorSorteado];
            }
        }
    })
})

function verificaGanhador() {
    if (botaoTabuleiro[0].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[1].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[2].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[3].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[4].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[5].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[6].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[7].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[8].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[0].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[3].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[6].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[1].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[4].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[7].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[2].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[5].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[8].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[0].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[4].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[8].textContent == jogadores[jogadorSorteado]) {
        return true;
    } else if (botaoTabuleiro[2].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[4].textContent == jogadores[jogadorSorteado] && botaoTabuleiro[6].textContent == jogadores[jogadorSorteado]) {
        return true;
    } 
};