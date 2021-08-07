const numero = Number(prompt('Digite um número: ')); 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}.</p>`; 
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`; 
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`; 
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</P>`; 
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com 2 casas decimais: ${numero.toFixed(2)}.</p>`;

