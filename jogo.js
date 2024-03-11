let numeroSecreto = 7;

let chute = '';

while(chute == '' || chute == null ){
    chute = prompt('Escolha um número de 0 a 10');
}

if(numeroSecreto == chute){
    alert('Parabéns, você acertou!!!');

}else{
    alert('Tenta de novo, você errou');

}
