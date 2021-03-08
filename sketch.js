var balloon;
var background;
var database;
var height;

function preload(){
  balloon = loadImage("Hot Air Balloon-02.png");
  balloon = loadImage("Hot Air Balloon-03.png");
  balloon = loadImage("Hot Air Balloon-04.png");

  backgroundImage = loadImage("Hot Air Balloon-01.png");
}

function setup() {
 
    database = firebase.database();
        createCanvas(500,500);
    balloon = createSprite(400, 200, 50, 50);

    var balloonPosition = database.ref('balloon/height');
    //.on listener is to read changed values
    balloonPosition.on("value",readPosition, showError);

}

function draw() {
  background(backgroundImage); 
  stroke();
  textSize();
  text("PRESS ARROW KEY EVENTS FOR PLAYING THIS GAME");

  if(keyCode(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDOWN(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDOWN(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDOWN(DOWN_ARROW)){
    balloon.Y = balloon.y +10;
  }

  drawSprites();
}
//to write/update database
function ubdateHeight(x,y){

      database.ref('balloon/height').set({
        'x': height.x+x,
        'y':height.y+y
      })
}
//to read  from database
function readHeight(data){
  height = data.val(); 
  balloon.x = height.x;
  balloon.y = height.y; 
}
// to showError in database
function showError(){
    console.log("Error in writing to the database");
}
function keyPressed()
   { if(keyDOWN(UP_ARROW)){
      ubdateHeight(0,-10);
      balloon,addAnimation("Hot Air Balloon-03.png",balloonImg2);
      balloon.scale=balloon.scale -0.01;
  }

}
  





