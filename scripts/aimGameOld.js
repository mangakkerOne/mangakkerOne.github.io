var w = 800;
var h = 600;
var txtS = 20;
var hits = 0;
var miss = 0;
var size = 1;
var minSize = 1;
var maxSize = 20;
var tx, ty, mx, my, glos;
var bkColor = 70;
var targets=[];
var grow = true;


function setup() {
  createCanvas(w, h);
  background(bkColor);
  size = 1;
  tx = w / 2;
  ty = h / 2;
  frameRate(15);
  glos=255;  
}

function txt(){
  fill(0);
  noStroke();
  textSize(txtS);
  text("hits: " + hits, 10, txtS);
  text("miss: " + miss, 10, txtS * 2)  
}

function target(x, y, size){  
  fill(40);
  stroke(0);
  ellipse(x, y, size, size);  
}

function missgert(mx, my, glos){
  stroke(+glos);
  line(mx - 6, my, mx + 6, my);
  line(mx, my - 6, mx, my + 6);
}

function draw() {
  background(bkColor);  
	target(tx, ty, size);
  missgert(mx, my, glos);
  txt();
  
  if (grow){
    if (size < maxSize){      
      size++;
      if (glos > bkColor){
        glos -= (255 / bkColor) * 2;
      } else {
        glos = bkColor;
      }       
    } else {
      grow = false;
    }     
  } else {
    if (size > minSize){
      size--;
      if (glos > bkColor){
        glos -= (255 / bkColor) * 2;
      } else {
        glos = bkColor;
      }
    } else {
      tx = random(100 + maxSize, w - maxSize);
    	ty = random(maxSize, h - maxSize);
      grow = true;
    }
  }  
}

function mouseClicked(){
  if(mouseX >= (tx - size / 2) && mouseX <= (tx + size / 2) &&
     mouseY >= (ty - size / 2) && mouseY <= (ty + size / 2)){
     //hit!
    hits++;
    size = 1;
    grow = true;
    tx = random(100 + maxSize, w - maxSize);
    ty = random(maxSize, h - maxSize);
    
    } else {      
      //miss!
      miss++;
      mx = mouseX;
      my = mouseY;
      glos=255;       
    }
} 