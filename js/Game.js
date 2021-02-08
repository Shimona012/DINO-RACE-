class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    c1= createSprite(100,200);
    c2= createSprite(500,200);
    c3= createSprite(900,200);
    c4= createSprite(1100,200);
    cars=[c1,c2,c3,c4];
    c1.addImage(d1);
  c2.addImage(d2);
  c3.addImage(d3);
  c4.addImage(d4);
  c1.scale=0.3;
c2.scale=0.3; 
c3.scale=0.3;
c4.scale=0.3;

  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
  //    var display_position = 130;
  //index of the array[];
var  index=0;
//x and y position of the cars,
var x=0;
var y;
      for(var plr in allPlayers){
        // add 1 to the index for every loop.
        index=index+1;
       //position the cars a litttle away from each other in  x direction.
       x=x+200;
       // use data from the database to diplay the cars in y direction.
       y=displayHeight-allPlayers[plr].distance;
       cars[index-1].x=x;
       cars[index-1].y=y;
       if(index===player.index){
         cars[index-1].shapeColor="red";
         // game camera allows us to change how and from where we are viewing the game;
         camera.position.x=displayWidth/2;
         camera.position.y=cars[index-1].y;
       }
    }
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=50
      player.update();
    }
    
    drawSprites();
  }
}

