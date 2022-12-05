// ==============================> Parte 01 - Variáveis <==============================

// const produto = prompt('Insira o nome de um produto:')
// const preco = prompt('Insira o preço do produto:') - 1
// console.log(produto, preco);

// ==============================> Parte 02 - Operadores Aritméticos <==============================

// const num1 = Number(prompt('Insira um número:'))
// const num2 = Number(prompt('Insira outro número:'))
// console.log('Soma:', num1 + num2);
// console.log('Subtração:', num1 - num2);
// console.log('Multiplicação:', num1 * num2);
// console.log('Divisão:', (num1 / num2).toFixed(2));
// console.log('Resto da divisão:', num1 % num2);

// ==============================> Parte 03 - Comparadores <==============================

// let randomNum = Math.floor(Math.random() * 10) + 1
// let userNum = Number(prompt('Insira um número de 1 a 10:'))

// if (randomNum > userNum) {
//     console.log(`Seu número foi ${userNum} e o número sorteado foi ${randomNum}, logo o número sorteado é maior.`);
// } else if (randomNum === userNum) {
//     console.log(`Seu número foi ${userNum} e o número sorteado foi ${randomNum}, logo os dois números são iguals.`);
// } else {
//     console.log(`Seu número foi ${userNum} e o número sorteado foi ${randomNum}, logo o número sorteado é menor.`);
// }

// ==============================> Parte 04 - Operadores Lógicos <==============================

// const idade = Number(prompt('Qual a sua idade?'))
// const altura = Number(prompt('Qual a sua altura?')).toFixed(2)
// const cardiaco = prompt('Você tem algum problema cardíaco? Digite "Sim" ou "Não".').toLowerCase()

// if (idade > 18 && altura > 1.60 && cardiaco === 'não') {
//     console.log('Você tem permissão para entrar no brinquedo.');
// } else {
//     console.log('Você não tem permissão para entrar no brinquedo.');
// }

// ==============================> Parte 05 - Strings <==============================

// const linha = ' Hoje eu vou comer cenoura, ebaaa '

// console.log('Tamanho da string:', linha.length);
// console.log(linha.trim());
// console.log(linha.toLowerCase());
// console.log('Linha inclui "comer"?', linha.includes('comer'));
// console.log('Linha inclui "batata"?', linha.includes('batata'));
// const novaLinha = linha.replaceAll('cenoura', 'batata')
// console.log(novaLinha);
// console.log('Linha inclui "comer"?', novaLinha.includes('comer'));
// console.log('Linha inclui "batata"?', novaLinha.includes('batata'));

// ==============================> Parte 06 - Arrays <==============================

// const array = ['batata', 'cenoura', 'beterraba']

// console.log(array[2]);
// console.log(array.length);
// console.log(array.push('mandioca'));
// console.log(array.includes('cenoura'));
// console.log(array.splice(1, 1));
// console.log(array);

// ==============================> Parte 07 - Funções <==============================

// const array = [5, 9, 12, 57, 45]

// function divideDois (arrayNum) {
//     const primeiro = arrayNum[0] / 2
//     const segundo = arrayNum[arrayNum.length-1] / 2
//     arrayNum[0] = primeiro
//     arrayNum[arrayNum.length-1] = segundo
//     return arrayNum
// }
// console.log(array);
// console.log(divideDois(array));

// ==============================> Parte 08 - Objetos <==============================

// const pessoa = {
//     nome: 'Tainá',
//     idade: 27,
//     generoMus:'Metal'
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMus}`);

// const pessoa2 = {
//     ...pessoa,
//     nome: 'Tilápia'
// }

// console.log(`O nome da pessoa é ${pessoa2.nome}, ela tem ${pessoa2.idade} anos e gosta muito de ${pessoa2.generoMus}`);

// ==============================> Parte 09 - Condicionais <==============================

// const num = Number(prompt('Insira um número:'))

// if (num % 2 === 0) {
//     console.log('O número é par.');
// } else {
//     console.log('O número é ímpar.');
// }

// const bichinho = prompt("Insira o nome do seu pet:")
// const tipoBichinho = prompt("Insira a espécie do seu pet:").toLowerCase()

// if (tipoBichinho === 'cachorro') {
//     console.log('Au au');
// } else if (tipoBichinho === 'gato') {
//     console.log('Miau');
// } else if (tipoBichinho === 'vaca') {
//     console.log('Muuu');
// } else {
//     console.log('Sem barulho reconhecido :(');
// }

// switch (tipoBichinho) {
//     case 'cachorro':
//         console.log('Au au');
//         break;
//     case 'gato':
//         console.log('Miau');
//         break;
//     case 'vaca':
//         console.log('Muuu');
//         break;
//     default:
//         console.log('Sem barulho reconhecido :(');
//         break;
// }

// ==============================> Parte 10 - Laços <==============================

// const array = [5, 67, 23, 68, 12, 45, 87]

// let maior = -Infinity

// i = 0
// while (i < array.length) {
//     if (array[i] > maior) {
//         maior = array[i]
//     }
//     i++
// }

// console.log(`O maior número é ${maior}.`);

// for (i = 0; i < array.length; i++) {
//     if (array[i] > maior) {
//         maior = array[i]
// }
//     i++
// }

// console.log(`O maior número é ${maior}.`);

// for (numero of array) {
//     if (numero > maior) {
//         maior = numero
// }
// }

// console.log(`O maior número é ${maior}.`);

// const prof = {
//     nome: 'Letícia Chijo',
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFav: ['Chrono Trigger', 'Undertale', 'Hollow Knight'],
//     contaPiada: () => console.log('É pavê ou pacume?'),
//     pet: {
//     nome: 'Polly',
//     especie: 'cachorra',
//     raca: 'Lhasa Apso',
//     snacksFav: ['biscoito', 'maçã', 'frango']
//     }}

// let aulaBack
// if (prof.aulasBack) {
//     aulaBack = 'Dou'
// } else {
//     aulaBack = 'Não dou'
// }

// let aulaFront
// if (prof.aulasFront) {
//     aulaFront = 'Dou'
// } else {
//     aulaFront = 'Não dou'
// }

// const verificaAula = (aula) => {
//     if (aula) {
//     return 'Dou'
// } else {
//     return 'Não dou'
// }
// }

// const aulaBack = verificaAula(prof.aulasBack)
// const aulaFront = verificaAula(prof.aulasFront)

// const jogos = []
// for (i = 1; i <= prof.jogosFav.length; i++) {
//     jogos.push(`\n${i} ${prof.jogosFav[i-1]}\n`)
// }

// const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos. ${aulaBack} aulas de back-end e ${aulaFront} aulas de front-end. Meus jogos favoritos são: ${jogos}Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFav[1]}.`

// console.log(frase);
// prof.contaPiada()

// ==============================> Parte 11 - map e filter <==============================

