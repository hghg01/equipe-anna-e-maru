 var nome_user = '';
 var fulano = document.querySelector('span');

 while(nome_user =='') {
    nome_user = prompt('Qual é o seu nome?');
 }

 fulano.textContent = nome_user;
