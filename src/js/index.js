console.log(document.getElementById('btn-avancar'));
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar')
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');
// PASSO 2
btnAvancar.addEventListener('click', function (){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if(ehUltimoCartao) return;
//    PASSO 4
    esconderCartaoselecionado();
// PASSO 3
    cartaoAtual++;
    MostrarCartao();
});

//PASSO 2
btnVoltar.addEventListener('click', function () {
    const ehPrimeiroCartao = cartaoAtual ===0
    if(ehPrimeiroCartao) return;
esconderCartaoselecionado();
// PASSO 3
    cartaoAtual--;
    MostrarCartao();


});

function esconderCartaoselecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function MostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}
