let listaDeNumerosSorteados = [] ;
let numeroLimite = 1000 ;
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do numero secreto .';

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite +1 );
    //Aqui definir que se todos os numeros da lista forem ultilizados , a lista reseta .
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroLimite ) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio () ;}
        else{
            listaDeNumerosSorteados.push (numeroEscolhido)
            return numeroEscolhido
        }
     
}
 
let numeroSecreto = gerarNumeroAleatorio ()
let tentativas = 1 ;
// TAG E TEXTO DENTRO DO PARENTESES SÂO PARAMETROS

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirTextoNaTela ('h1','Jogo do numero secreto');
exibirTextoNaTela ('p','Escolha um número entre 1 e 100');

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1','Jogo do numero secreto');
    exibirTextoNaTela ('p','Escolha um número entre 1 e 100');

}

exibirMensagemInicial ()

function verificarChute()  {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto)  {
        exibirTextoNaTela ('h1','Acertou !')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa ';
        let numeroDeTentativas = `Você acertou com ${tentativas} ${palavraTentativa} .`;
        console.log("Números já sorteados:", listaDeNumerosSorteados)

        exibirTextoNaTela ('p',numeroDeTentativas )
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {  
        if ( chute > numeroSecreto) { exibirTextoNaTela ('p','O numero secreto é menor');}
        
        else {
            exibirTextoNaTela('p','O numero secreto é maior.');
        } tentativas++ ;
        limparCampo ()
        

        
        
        
    } 


}
function limparCampo() {
    const chute = document.querySelector ('input')
    chute.value = '' ;
}
console.log("Numero sorteado foi ", numeroSecreto );

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio (); 
    limparCampo ();
    tentativas = 1 ;
    exibirMensagemInicial () 
    document.getElementById ('reiniciar').setAttribute ('disabled', true)
    // Quando for fazer função resete , temos que jogar dentro do campo os atributos que estava fazendo o jogo funcionar da forma esperada . ( Funções)
    //exibirTextoNaTela ('h1','Jogo do numero secreto');
    //exibirTextoNaTela ('p','Escolha um número entre 1 e 10');

}//Usamos push para adicionar mais itens na lista de uma variavél com array.
// para removermos o ultimo elemento da lista usamos pop