var canvas, backgroundImage;
var c1,c2,c3,c4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars=[];
var form, player, game;
var d1,d2,d3,d4;
var bg;

function preload(){
d1=loadImage("js/1.jpg");
d2=loadImage("js/2.jpg");
d3=loadImage("js/3.jpg");
d4=loadImage("js/4.jpg");
bg=loadImage("bg.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();112
}

function draw(){
// background("orange");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   // background(bg);
  }
  t
}

