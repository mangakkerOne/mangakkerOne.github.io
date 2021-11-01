// var w = 800;
// var h = 600;
// var txtS = 20;
// var hits = 0;
// var miss = 0;
// var size = 1;
// var minSize = 1;
// var maxSize = 20;
// var tx, ty, mx, my, glos;
// var bkColor = 70;
// var targets=[];
// var grow = true;


// function setup() {
  // createCanvas(w, h);
  // background(bkColor);
  // size = 1;
  // tx = w / 2;
  // ty = h / 2;
  // frameRate(15);
  // glos=255;  
// }

// function txt(){
  // fill(0);
  // noStroke();
  // textSize(txtS);
  // text("hits: " + hits, 10, txtS);
  // text("miss: " + miss, 10, txtS * 2)  
// }

// function target(x, y, size){  
  // fill(40);
  // stroke(0);
  // ellipse(x, y, size, size);  
// }

// function missgert(mx, my, glos){
  // stroke(+glos);
  // line(mx - 6, my, mx + 6, my);
  // line(mx, my - 6, mx, my + 6);
// }

// function draw() {
  // background(bkColor);  
	// target(tx, ty, size);
  // missgert(mx, my, glos);
  // txt();
  
  // if (grow){
    // if (size < maxSize){      
      // size++;
      // if (glos > bkColor){
        // glos -= (255 / bkColor) * 2;
      // } else {
        // glos = bkColor;
      // }       
    // } else {
      // grow = false;
    // }     
  // } else {
    // if (size > minSize){
      // size--;
      // if (glos > bkColor){
        // glos -= (255 / bkColor) * 2;
      // } else {
        // glos = bkColor;
      // }
    // } else {
      // tx = random(100 + maxSize, w - maxSize);
    	// ty = random(maxSize, h - maxSize);
      // grow = true;
    // }
  // }  
// }

// function mouseClicked(){
  // if(mouseX >= (tx - size / 2) && mouseX <= (tx + size / 2) &&
     // mouseY >= (ty - size / 2) && mouseY <= (ty + size / 2)){
     // hit!
    // hits++;
    // size = 1;
    // grow = true;
    // tx = random(100 + maxSize, w - maxSize);
    // ty = random(maxSize, h - maxSize);
    
    // } else {      
      // miss!
      // miss++;
      // mx = mouseX;
      // my = mouseY;
      // glos=255;       
    // }
// } 

/* *********************************************************** */

	// Start setup
const TEXT_SIZE = 20;
const MAX_FPS = 25;
const CANVAS_W = CANVAS_H = 600;
let   boolPlay = false;
let   button;
let   buttonPos;
let   txtButton = 'Start';
let   maxRadius = 20;
let   minRadius = 1;
	// Colors
const COLOR_BACKGROUND = 70;

	// Main Function! Do not delete!
function setup() {	
	// First create and update
	let cnvs = createCanvas(CANVAS_W, CANVAS_H);
	
	background(COLOR_BACKGROUND);
	frameRate(MAX_FPS);
	button = createButton(txtButton);
	buttonPos = cnvs.position();
	button.position(buttonPos.x, buttonPos.y);
	button.mousePressed(startGame);
	
	//alert(button.elt.firstChild.data);
	
	// Wait until draw	
	noLoop();
	
	target.posX = 200;
	target.posY = 200;
	target.radius = 30;
	target.isGrow = true;
	alert(target.posX);
	//target.drawTarget();
}

	// Main cycle Function! Do not delete!
function draw() {
	// Frame setup and first update
	background(COLOR_BACKGROUND);
	
	drawButton();
	//drawText();
	
}

	//Current program
	
let target = {
	
	get isGrow() {
		return this._isGrow;
	},
	set isGrow(value) {
		if (value) {
			this._isGrow = false;
		}
		this._isGrow = Boolean(value);
	},
	
	get posX() {
		return this._posX;
	},
	set posX(x) {
		if (x) {
			return this._posX = 0;
		}
		this._posX = +x;		
	},
	
	get posY() {
		return this._posY;
	},
	set posY(y) {
		if (y) {
			return this._posY = 0;
		}
		this._posY = +y;		
	},
	
	get radius() {
		return this._radius;
	},
	set radius(value) {
		if (value) {
			return this._radius = 0;
		}
		this._radius = +value;
	},
	
	drawTarget() {
		fill(40);
		stroke(0);
		ellipse(this._posX, this._posY, this.radius); 
	}
	
}

let missgert = {
	__proto__: target,
	
	get glos() {
		return this._glos;
	},
	set glos(value) {
		switch (value) {			
			case (+value === NaN): this._glos = 255
			case (+value < 0): this._glos = 0;
			case (+value > 255): this._glos = 255; //darker than black
			default: this._glos = +value;
		}
	},
	
	drawMissgert() {
		stroke(glos);
		line(mx - 6, my, mx + 6, my);
		line(mx, my - 6, mx, my + 6);
	}
	
}

function mouseClicked() {
	// Has been game started?	
	if (!boolPlay) return;
	// Yes, already started!	
	
	if (checkHit()) {
		// Hit!
		
	} else {
		//Miss...
		
	}
}

function checkHit() {
	let value = false;
	
	return value;
}

function drawButton() {
	
	if (boolPlay) {
		txtButton = "Stop";
	} else {
		txtButton = "Start";
	}	
	button.elt.firstChild.data = txtButton;
}

function startGame() {
	
	boolPlay = !boolPlay;
	loop();
	
}