//criando variaveis e selecionando os ID's
let resultado = document.getElementById("texto");
let result = document.getElementById("result");
//let pedraa = document.getElementById('pedra');
//let papelb = document.getElementById('papel');
//let tesourac = document.getElementById('tesoura');

//PLACARES
let placarplayer = 0;
let placarbot = 0;
//---------------------------------------------//
let textplacarplayer = document.getElementById("placarplayer");
let textplacarbot = document.getElementById("placarbot");

//minhaescolha = Pedra -- 0, Papel-- 1, Tesoura -- 2
let minhaescolha = 0;
let escolhadobot = 0;

// Pedra -- 0
// Papel-- 1
// Tesoura -- 2
function jokenpo(escolha) {
  //escolha = 'pedra' --> parametro selecionado do botao

  //bot --> numero aleatorio
  let bot = Math.floor(Math.random() * 3);

  //escolha == minha esolha de jogo, pedra,papel,tesoura.
  if (escolha == "pedra") {
    minhaescolha = 0;
    document.getElementById("pedra").style.filter = "opacity(100%)";
    document.getElementById("papel").style.filter = "opacity(45%)";
    document.getElementById("tesoura").style.filter = "opacity(45%)";
  } else if (escolha == "papel") {
    minhaescolha = 1;
    document.getElementById("pedra").style.filter = "opacity(45%)";
    document.getElementById("papel").style.filter = "opacity(100%)";
    document.getElementById("tesoura").style.filter = "opacity(45%)";
  } else {
    minhaescolha = 2;
    document.getElementById("pedra").style.filter = "opacity(45%)";
    document.getElementById("papel").style.filter = "opacity(45%)";
    document.getElementById("tesoura").style.filter = "opacity(100%)";
  }

  //definindo a escolha do bot, com base no random.
  //escolhadobot = escolha do bot.
  if (bot == 0) {
    escolhadobot = "pedra";
  } else if (bot == 1) {
    escolhadobot = "papel";
  } else {
    escolhadobot = "tesoura";
  }

  //sistema de empate
  //bot == minhaescolha --> se os dois valores forem iguais, empate.
  if (bot == minhaescolha) {
    resultado.innerHTML = "Você: " + escolha + " /  Bot: " + escolhadobot;
    result.innerHTML = "Empate";
  }
  // Pedra -- 0
  // Papel-- 1
  // Tesoura -- 2
  //SISTEMA GANHAR
  if ((bot == 0) & (minhaescolha == 1)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Jogador 1 WINS";
    placarplayer++;
    textplacarplayer.innerHTML = placarplayer;
  }
  if ((bot == 1) & (minhaescolha == 2)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Jogador 1 WINS";
    placarplayer++;
    textplacarplayer.innerHTML = placarplayer;
  }
  if ((bot == 2) & (minhaescolha == 0)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Jogador 1 WINS";
    placarplayer++;
    textplacarplayer.innerHTML = placarplayer;
  }
  // Pedra -- 0
  // Papel-- 1
  // Tesoura -- 2
  //SISTEMA PERDER
  if ((bot == 0) & (minhaescolha == 2)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Bot ganhou :/";
    placarbot++;
    textplacarbot.innerHTML = placarbot;
  }
  if ((bot == 2) & (minhaescolha == 1)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Bot ganhou :/";
    placarbot++;
    textplacarbot.innerHTML = placarbot;
  }
  if ((bot == 1) & (minhaescolha == 0)) {
    resultado.innerHTML = "Você : " + escolha + " / Bot: " + escolhadobot;
    result.innerHTML = "Bot ganhou :/";
    placarbot++;
    textplacarbot.innerHTML = placarbot;
  }
}
