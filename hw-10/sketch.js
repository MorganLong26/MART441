function setup() {
createCanvas( 600 , 800 );
//background color
background("purple");
}

var angle = 0;


function draw() {


//Rotationrate for the arms
armRotationRate = (mouseX * 1) - 100;

//Main Sandbox
  push();

//Grid is centered
translate( 0, 400);

//Body
push();

// Cyclops will follow the mouse
translate(mouseX, mouseY );


//Main shirt rectangle
rect(-200,-150, 250,250);
pop();

//Design on shirt
push();
translate(mouseX, mouseY );
fill('black');
translate(-100, -150);
rect(0 ,0 ,45 ,250);
translate(80,0);
rect(0 ,0 ,45 ,250);
translate(80,0);
pop();//body end

//legs
push();
translate(mouseX, mouseY );
translate( 0, 250);

//Left leg
fill('black')
ellipse(-150,-25,60,250);
//Right Leg
scale(-1,1);
ellipse(-5,-25,60,250);
pop(); //end of legs

//Arms
push();
translate(mouseX, mouseY );
translate(0,-100);
//Defining scope
rotate( radians(armRotationRate));


//Left Arm
fill('pink')
ellipse(-200,50,-40,-200)

//Right Arm
scale(-1,1);
ellipse(-55,50,-40,-200)
pop(); //Arms end

//Head
push();
translate(mouseX, mouseY );
translate(0,-250)

fill('pink');
ellipse(-70, 5, 180, 200);


//mouth
fill("black");
arc(-70, 50, 150, 60, radians(360), radians(180),PIE);

//Eyes
push();
translate(-70, -50);

//Middle eye
fill('red')
ellipse(0, 0, 60, 35);
translate( width*0.5, height*0.5 );
  rotate( radians(angle) );
ellipse(0, 0, 60, 35);

  // update angle position
  angle = angle + 100;
pop(); //end of head and face


pop();
}
