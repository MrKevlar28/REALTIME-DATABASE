var database;
var canvas, form, player, game, playerCount;
var gameState = 0;
var allPlayers;
var distance = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
    drawSprites();

  if(playerCount === 4){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();

  }
}

