
var r = 0;
var g = 204;
var b = 255;
var brush;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(600,600); 
}


function draw(){
  // change the value of Red based on the mouse movement about the X axis
  r=map(mouseX, 0, width, 255, 0); 
  // change the value of Green based on the mouse movement about the X axis
  g=map(mouseX, 0, width, 204, 255);
  // change the value of Blue based on the mouse movement about the X axis
  b=map(mouseX, 0, width, 0,0);
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  brush = ellipse(mouseX,mouseY,40,40); 
  // Remember to fill the canvas with white paint before creating the ellipse.
  
}