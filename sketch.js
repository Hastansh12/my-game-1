var bkg,form;
var manager,managerImage;
var gameState=0;
var bkgImg;




function preload(){
managerImage=loadImage('Images/manager1.png');
bkgImg=loadImage('Images/bkg1.jpg');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  manager=new Manager();
}

function draw() {

  background(0,255,0); 
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
background(bkgImg);
   
    manager.display();
  } 
}