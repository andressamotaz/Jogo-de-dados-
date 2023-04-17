// Variáveis do jogo
var pontuacao1 = 0;
var pontuacao2 = 0;
var rodadaAtual = 1;
var numRodadas = 10;

// Elementos HTML
var btnJogar1 = document.getElementById("jogar1");
var btnJogar2 = document.getElementById("jogar2");
var btnReiniciar = document.getElementById("reiniciar");
var msgDiv = document.getElementById("messages");
var tabela = document.getElementById("resultado");
var celulaPontuacao1 = document.getElementById("pontuacao1");
var celulaPontuacao2 = document.getElementById("pontuacao2");

// Manipuladores de eventos
btnJogar1.addEventListener("click", function() {
  var resultado1 = rolarDado();
  var resultado2 = rolarDado();
  var msg = "Jogador 1 rolou " + resultado1 + ". Jogador 
