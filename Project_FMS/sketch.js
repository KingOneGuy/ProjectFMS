// Image variables
let titleScreen;
let levelSelectScreen;
let shapeInTheHoleScreen;
let simonSwipesScreen;
let starClickerScreen;
let thankYouForPlayingScreen;
let shapeInTheHoleInstructions;
let simonSwipesInstructions;
let starClickerInstructions;

// Sound variables
let correctSound;
let incorrectSound;
let arrowSound;

// BGM variables
let mainMenuBGM;
let shapeInTheHoleBGM;

// Game variables
var gameState;
var drawBackground;

function preload()
{
  titleScreen = loadImage("Images/FMS PROJECT TITLE SCREEN.png");
  levelSelectScreen = loadImage("Images/FMS PROJECT LEVEL SELECT.png");
  shapeInTheHoleScreen = loadImage("Images/FMS PROJECT SHAPE IN THE HOLE.png");
  simonSwipesScreen = loadImage("Images/FMS PROJECT SIMON SWIPES.png");
  starClickerScreen = loadImage("Images/FMS PROJECT STAR CLICKER.png");
  thankYouForPlayingScreen = loadImage("Images/FMS PROJECT THANK YOU FOR PLAYING.png");
  shapeInTheHoleInstructions = loadImage("Images/FMS PROJECT SHAPE IN THE HOLE INSTRUCTIONS.png");
  simonSwipesInstructions = loadImage("Images/FMS PROJECT SIMON SWIPES INSTRUCTIONS.png");
  starClickerInstructions = loadImage("Images/FMS PROJECT STAR CLICKER INSTRUCTIONS.png");
  
  correctSound = loadSound("Sounds/FMS PROJECT CORRECT SOUND.mp3");
  incorrectSound = loadSound("Sounds/FMS PROJECT INCORRECT SOUND.mp3");
  arrowSound = loadSound("Sounds/FMS PROJECT CLICK SOUND.mp3");
  
  mainMenuBGM = loadSound("BGM/Main Menu BGM.mp3");
  shapeInTheHoleBGM = loadSound("BGM/Shape In The Hole BGM.mp3");
  starClickerBGM = loadSound("BGM/Star Clicker BGM.mp3");
  simonSwipesBGM = loadSound("BGM/Simon Swipes BGM.mp3");
  
  titleAudioInstructions = loadSound("Instructions Audio/Title Instructions.mp3");
  gameSelectAudioInstructions = loadSound("Instructions Audio/Game Select Instructions.mp3");
  shapeInTheHoleAudioInstructions = loadSound("Instructions Audio/Shape In The Hole Instructions.mp3");
  simonSwipesAudioInstructions = loadSound("Instructions Audio/Simon Swipes Instructions.mp3");
  starClickerAudioInstructions = loadSound("Instructions Audio/Star Clicker Instructions.mp3");
}

function setup()
{
  createCanvas(576, 374); // Original image dimensions * 0.3
  gameState = "TITLE";
  drawBackground = true;
  correctSound.setVolume(0.9);
  incorrectSound.setVolume(0.75);
  BGMSetup();
  instructionsSetup();
  mainMenuBGM.loop();
  titleAudioInstructions.play();
}

function draw()
{
  if(drawBackground) { background(220); }
  
  if(gameState == "TITLE")
  {
    titleDraw();
  }
  else if(gameState == "LEVEL SELECT")
  {
    levelSelectDraw();
  }
  else if(gameState == "SHAPE IN THE HOLE")
  {
    shapeInTheHoleDraw();
  }
  else if(gameState == "SIMON SWIPES")
  {
    simonSwipesDraw();
  }
  else if(gameState == "STAR CLICKER")
  {
    starClickerDraw();
  }
  else if(gameState == "THANKS FOR PLAYING")
  {
    thanksForPlayingDraw();
  }
  else if(gameState == "SHAPE IN THE HOLE INSTRUCTIONS"){
    image(shapeInTheHoleInstructions,0,0);
  }
  else if(gameState == "SIMON SWIPES INSTRUCTIONS"){
    image(simonSwipesInstructions,0,0);
  }
  else if(gameState == "STAR CLICKER INSTRUCTIONS"){
    image(starClickerInstructions,0,0);
  }
}

function mousePressed()
{
  if(gameState == "TITLE") // **Title
  {
    titleMousePressed();
  }
  else if(gameState == "LEVEL SELECT") // **Level Select
  {
    levelSelectMousePressed();
  }
  else if(gameState == "SHAPE IN THE HOLE") // **Shape in the Hole
  {
    shapeInTheHoleMousePressed();
  }
  else if(gameState == "SIMON SWIPES") // **Simon Swipes
  {
    simonSwipesMousePressed();
  }
  else if(gameState == "STAR CLICKER") // **Star Clicker
  {
    starClickerMousePressed();
  }
  else if(gameState == "THANKS FOR PLAYING")
                                      // **Thank you for playing
  {
    thanksForPlayingMousePressed();
  }
  else if(gameState == "SHAPE IN THE HOLE INSTRUCTIONS"){
    shapeInTheHoleInstructionsMousePressed();
  }
  else if(gameState == "SIMON SWIPES INSTRUCTIONS"){
    simonSwipesInstructionsMousePressed();
  }
  else if(gameState == "STAR CLICKER INSTRUCTIONS"){
    starClickerInstructionsMousePressed();
  }
  //print(mouseX + " " + mouseY);  // Debugging
}

function mouseClicked(){
  if(gameState == "STAR CLICKER"){
    SCMouseClicked();
  }
}

function mouseDragged(){
  if(gameState == "SHAPE IN THE HOLE") // **Shape in the Hole
  {
    shapeInTheHoleMouseDragged();
  }else if(gameState == "SIMON SWIPES"){ // **Simon Swipes
    simonSwipesMouseDragged();
  }
}

function mouseReleased(){
  if(gameState == "SHAPE IN THE HOLE") // **Shape in the Hole
  {
    shapeInTheHoleMouseReleased();
  }else if(gameState == "SIMON SWIPES"){ // **Simon Swipes
    simonSwipesMouseReleased();
  }
}

function BGMSetup(){
  mainMenuBGM.setVolume(0.25);
  starClickerBGM.setVolume(0.7);
  shapeInTheHoleBGM.setVolume(0.5);
  simonSwipesBGM.setVolume(0.65);
}

function instructionsSetup(){
  titleAudioInstructions.setVolume(0.75);
  gameSelectAudioInstructions.setVolume(0.75);
  shapeInTheHoleAudioInstructions.setVolume(1);
  simonSwipesAudioInstructions.setVolume(0.9);
  starClickerAudioInstructions.setVolume(0.9);
}

// ------------------TITLE CODE------------------
function titleDraw(){
  image(titleScreen, 0, 0);
}

function titleMousePressed(){
  if(mouseX >= 192 && mouseX <= 388 &&
      mouseY >= 252 && mouseY <= 281) // Game start
    {
      gameState = "LEVEL SELECT";
      titleAudioInstructions.stop();
      gameSelectAudioInstructions.play();
    }
}

// ------------------LEVEL SELECT CODE------------------
function levelSelectDraw(){
  image(levelSelectScreen, 0, 0);
}

function levelSelectMousePressed(){
  if(mouseX >= 12 && mouseX <= 55 &&
    mouseY >= 8 && mouseY <= 34) // Back to title
  {
    gameState = "TITLE";
    gameSelectAudioInstructions.stop();
    titleAudioInstructions.play();
  }
  else if(mouseX >= 240 && mouseX <= 530 &&
    mouseY >= 154 && mouseY <= 193) // Shape in the Hole
  {
    gameState = "SHAPE IN THE HOLE INSTRUCTIONS";
    gameSelectAudioInstructions.stop();
    shapeInTheHoleAudioInstructions.play();
  }
  else if(mouseX >= 240 && mouseX <= 530 &&
    mouseY >= 218 && mouseY <= 257) // Simon Swipes
  {
    gameState = "SIMON SWIPES INSTRUCTIONS";
    gameSelectAudioInstructions.stop();
    simonSwipesAudioInstructions.play();
  }
  else if(mouseX >= 240 && mouseX <= 530 &&
    mouseY >= 278 && mouseY <= 317) // Simon Swipes
  {
    gameState = "STAR CLICKER INSTRUCTIONS";
    gameSelectAudioInstructions.stop();
    starClickerAudioInstructions.play();
  }
}

// ------------------INSTRUCTIONS CODE------------------
function shapeInTheHoleInstructionsMousePressed(){
  if(mouseX >= 12 && mouseX <= 55 &&
    mouseY >= 8 && mouseY <= 34) // Back to title
  {
    gameState = "LEVEL SELECT";
    gameSelectAudioInstructions.play();
    shapeInTheHoleAudioInstructions.stop();
  }else if(mouseX > 220 && mouseY > 259 &&
           mouseX < 338 && mouseY < 297){
    shapeInTheHoleSetup();
    gameState = "SHAPE IN THE HOLE";
    mainMenuBGM.stop();
    shapeInTheHoleAudioInstructions.stop();
    shapeInTheHoleBGM.loop();
  }
}

function simonSwipesInstructionsMousePressed(){
  if(mouseX >= 12 && mouseX <= 55 &&
    mouseY >= 8 && mouseY <= 34) // Back to title
  {
    gameState = "LEVEL SELECT";
    simonSwipesAudioInstructions.stop();
    gameSelectAudioInstructions.play();
  }else if(mouseX > 220 && mouseY > 259 &&
           mouseX < 338 && mouseY < 297){
    simonSwipesSetup();
    gameState = "SIMON SWIPES";
    mainMenuBGM.stop();
    simonSwipesAudioInstructions.stop();
    simonSwipesBGM.loop();
  }
}

function starClickerInstructionsMousePressed(){
  if(mouseX >= 12 && mouseX <= 55 &&
    mouseY >= 8 && mouseY <= 34) // Back to title
  {
    gameState = "LEVEL SELECT";
    starClickerAudioInstructions.stop();
    gameSelectAudioInstructions.play();
  }else if (mouseX > 220 && mouseY > 259 &&
            mouseX < 338 && mouseY < 297){
    starClickerSetup();
    gameState = "STAR CLICKER";
    mainMenuBGM.stop();
    starClickerAudioInstructions.stop();
    starClickerBGM.loop();
  }
}

// ------------------SHAPE IN THE HOLE CODE------------------
function shapeInTheHoleDraw(){
  SITHDrawBackground();
  if(!timeUp()){
    SITHGameDraw();
  }else{
    activePairIndex = -1;
    SITHGameOverDraw();
  }
}

function shapeInTheHoleMousePressed(){
  SITHUserInterfaceMousePressed();
  SITHGameMousePressed();
}

function shapeInTheHoleMouseDragged(){
  SITHGameMouseDragged();
}

function shapeInTheHoleMouseReleased(){
  SITHGameMouseReleased()
}

function SITHDrawBackground(){
  image(shapeInTheHoleScreen, 0, 0);
  strokeWeight(0);
  fill("white");
  rect(SITH_GAME_MIN_X, SITH_GAME_MIN_Y, SITH_GAME_MAX_X - SITH_GAME_MIN_X, SITH_GAME_MAX_Y - SITH_GAME_MIN_Y);
}

function SITHUserInterfaceMousePressed(){
  if(mouseX >= 21 && mouseX <= 66 &&
    mouseY >= 5 && mouseY <= 38) // Back to level select
  {
    gameState = "LEVEL SELECT";
    shapeInTheHoleBGM.stop();
    mainMenuBGM.loop();
  }
}

let SITH_GAME_MIN_X; // Minimum x of game
let SITH_GAME_MAX_X; // Maximum x of game
let SITH_GAME_MIN_Y; // Minimum y of game
let SITH_GAME_MAX_Y; // Minimum y of game
let COL_RADIUS; // Radius of collision circle. Radius of drawn shape will be double this.
let STROKE_WEIGHT; // Stroke weight when drawing shapes
let MAX_NUM_PAIRS; // Maximum number of pairs at a time
let TIME_SHOW_COLLIDED; // How long the symbol for an incorrect or correct pair should show in milliseconds.
let TIME_CREATE_SHAPE; // How long before a new shape is created in milliseconds
let TIME_CREATE_SHAPE_REDUCTION; // Difference between the time for spawning shapes at the start of the game vs. the end of the game in milliseconds
  // Example: if TIME_CREATE_SHAPE = 1500 and this is 500, it will take 1.5 seconds at the start of the game to create a shape and 1 second at the end of it
let TIME_LIMIT; // How long the time limit is in milliseconds
let SCORE_TEXT_POS; // Array for position of score text
let TIME_TEXT_POS; // Array for position of time text
let INITIAL_PAIRS; // Number of initial pairs the game starts with

let pairs = [];
let collidedPairs = [];
let shapeCreationTime; // Timekeeper for creating shapes
let timer; // Tracker for time elapsed in game

let activePairIndex; // Array index of the active pair. -1 if there is none.
let score; // Score of the game

// Contains the data on the pair of the shape and hole
// The shape and hole are both Squares
class ShapeHolePair{
  constructor(shapeX, shapeY, holeX, holeY){
    if(true){
      this.shape = new Square(shapeX, shapeY, COL_RADIUS*2);
      this.hole = new Square(holeX, holeY, COL_RADIUS*2);
    }
    this.activated = false;
    this.colors = [random(100, 256), random(100, 256), random(100, 256)];
  }
  
  checkShapeClick(){
    return this.shape.checkClicked();
  }
  
  checkHoleCollision(x, y){
    return sqrt(sq(x - this.hole.x) + sq(y - this.hole.y)) <= COL_RADIUS;
  }
  
  moveShape(dx, dy){
    this.shape.move(dx, dy);
  }
  
  drawShape(){
    strokeWeight(STROKE_WEIGHT);
    stroke(0);
    fill(this.colors[0], this.colors[1], this.colors[2]);
    this.shape.draw();
  }
  
  drawHole(){
    strokeWeight(STROKE_WEIGHT + 3);
    stroke(this.colors[0], this.colors[1], this.colors[2]);
    fill(0);
    this.hole.draw();
  }
  
}

// Contains data on square position and side length
// Also contains methods for drawing, click checking, and moving
class Square{
  constructor(x, y, side){
    this.x = x;
    this.y = y;
    this.side = side;
    this.shape = "square";
    this.activated = false;
  }
  
  draw(){
    square(this.x, this.y, this.side);
  }
  
  checkClicked(){
    return this.x <= mouseX && mouseX <= this.x + this.side && this.y <= mouseY && mouseY <= this.y + this.side;
  }
  
  move(dx, dy){
    this.x += dx;
    this.y += dy;
    this.x = max(this.x, SITH_GAME_MIN_X);
    this.x = min(this.x, SITH_GAME_MAX_X - this.side);
    this.y = max(this.y, SITH_GAME_MIN_Y);
    this.y = min(this.y, SITH_GAME_MAX_Y - this.side);
  }
}

// Collided pairs are matched pairs that display an X or check mark depending on if the pair was matched correctly
// Class has a timer that will delete the pair once it reaches 0
class CollidedPair{
  constructor(x, y, correct){
    this.correct = correct;
    this.x = x;
    this.y = y;
    this.time = TIME_SHOW_COLLIDED;
  }
  
  updateTime(){
    this.time -= deltaTime;
  }
  
  draw(){
    strokeWeight(STROKE_WEIGHT);
    if(this.correct){
      stroke("green");
      line(this.x, this.y + COL_RADIUS, this.x + COL_RADIUS, this.y + COL_RADIUS*2);
      line(this.x + COL_RADIUS, this.y + COL_RADIUS*2, this.x + COL_RADIUS*2, this.y);
    }else{
      stroke("red");
      line(this.x, this.y, this.x + COL_RADIUS*2, this.y + COL_RADIUS*2);
      line(this.x, this.y + COL_RADIUS*2, this.x + COL_RADIUS*2, this.y);
    }
  }
}

// Setup for the game
function shapeInTheHoleSetup() {
  drawBackground = true;
  
  SITH_GAME_MIN_X = 27;
  SITH_GAME_MIN_Y = 50;
  SITH_GAME_MAX_X = 556;
  SITH_GAME_MAX_Y = 306;
  COL_RADIUS = 20;
  STROKE_WEIGHT = 3;
  TIME_SHOW_COLLIDED = 1000;
  TIME_CREATE_SHAPE = 1200;
  TIME_CREATE_SHAPE_REDUCTION = 400;
  TIME_LIMIT = 60000;
  SCORE_TEXT_POS = [475, 20];
  TIME_TEXT_POS = [475, 40];
  MAX_NUM_PAIRS = 7;
  INITIAL_PAIRS = 3;
  
  activePairIndex = -1;
  score = 0;
  shapeCreationTime = TIME_CREATE_SHAPE;
  timer = TIME_LIMIT;
  collidedPairs = [];
  pairs = [];
  
  createInitialPairs();
}

// Draws all objects and calls time functions
function SITHGameDraw() {
  drawPairs();
  drawCollidedPairs();
  updateTime();
  SITHDrawText();
}

function SITHGameOverDraw(){
  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(189, 230, 200, 50);
  textAlign(CENTER);
  fill("black");
  strokeWeight(0);
  textSize(40);
  text("GAME OVER", 290, 130);
  textSize(30);
  text("Score: " + score, 285, 200);
  text("Play again?", 292, 265);
}

// Activates pair if mouse clicks on one
function SITHGameMousePressed(){
  if(!timeUp()){
    activePairIndex = pairActivation();
  }else if(189 <= mouseX && mouseX <= 389 && 230 <= mouseY && mouseY <= 280){
    shapeInTheHoleSetup();
  }
}

// Moves active pair based on mouse movement if there is one
function SITHGameMouseDragged(){
  if(activePairIndex != -1){
    pairs[activePairIndex].moveShape(movedX, movedY);
    checkCollisionsAfterMove();
  }
}

// Removes the active pair
function SITHGameMouseReleased(){
  //activePair.activated = false;
  activePairIndex = -1;
}

// Draws every shape and hole pair
function drawPairs(){
  for(let i = 0; i < pairs.length; i++){
    pairs[i].drawHole();
  }
  for(let i = 0; i < pairs.length; i++){
    pairs[i].drawShape();
  }
}

// Draws collided pairs
function drawCollidedPairs(){
  for(let i = 0; i < collidedPairs.length; i++){
    collidedPairs[i].draw();
  }
}

// Draws text related to the score and timer
function SITHDrawText(){
  textAlign(CENTER);
  fill("black");
  textSize(20);
  strokeWeight(0);
  text("Score: " + score, SCORE_TEXT_POS[0], SCORE_TEXT_POS[1]);
  text("Time: " + ceil(timer / 1000), TIME_TEXT_POS[0], TIME_TEXT_POS[1]);
}

// Creates INITIAL_PAIRS pairs and adds them to the pairs array
function createInitialPairs(){
  for(let i = 0; i < INITIAL_PAIRS; i++){
    pairs[i] = createShapeHolePair();
  }
}

// Code for checking if any shapes have been clicked
// Returns the index of the pair of the clicked shape if there is one. Else returns -1.
// If shape clicked, its pair is considered "activated"
function pairActivation(){
  for(let i = pairs.length - 1; i >= 0; i--){
    if(pairs[i].checkShapeClick() == true){
      //shapes[i].activated = true;
      //print("shape clicked");
      return i;
    }
  }
  return -1;
}

// Collision checking which is done after the shape is moved
// If the shape has collided with a hole, a new Collided Pair is made
// The Active Pair is automatically removed
// If the hole is incorrect, the incorrect pair is also removed
// Points are updated accordingly (+1 for correct, -1 for incorrect)
function checkCollisionsAfterMove(){
  for(let i = 0; i < pairs.length; i++){
    if(pairs[i].checkHoleCollision(pairs[activePairIndex].shape.x, pairs[activePairIndex].shape.y)){
      let correct = i == activePairIndex;
      collidedPairs.push(new CollidedPair(pairs[i].hole.x, pairs[i].hole.y, correct)); 
      if(correct){
        score++;
        correctSound.play();
      }else{
        score -= 3;
        if(activePairIndex < i) { i--; }
        pairs.splice(activePairIndex, 1);
        incorrectSound.play();
      }
      pairs.splice(i, 1);
      activePairIndex = -1;
      return;
    }
  }
}

// Creates a new ShapeHolePair that does not collide with itself or any other existing shapes or holes
// Returns the new ShapeHolePair Object
function createShapeHolePair(){
  while(true){
    var shapeX = random(SITH_GAME_MIN_X, SITH_GAME_MAX_X - COL_RADIUS*2);
    var shapeY = random(SITH_GAME_MIN_Y, SITH_GAME_MAX_Y - COL_RADIUS*2);
    var holeX = random(SITH_GAME_MIN_X, SITH_GAME_MAX_X - COL_RADIUS*2);
    var holeY = random(SITH_GAME_MIN_Y, SITH_GAME_MAX_Y - COL_RADIUS*2);
    if(sqrt(sq(shapeX - holeX) + sq(shapeY - holeY)) > COL_RADIUS*2 && !checkAllCollisions(shapeX, shapeY) && !checkAllCollisions(holeX, holeY)){
      return new ShapeHolePair(shapeX, shapeY, holeX, holeY);
    }
  }
}

// Checks for collision between all existing shapes and holes using given coordinates.
// Returns true if there is a collision. Returns false if no collision.
function checkAllCollisions(x, y){
  for(let i = 0; i < pairs.length; i++){
    if(sqrt(sq(x - pairs[i].hole.x) + sq(y - pairs[i].hole.y)) <= COL_RADIUS*2 || sqrt(sq(x - pairs[i].shape.x) + sq(y - pairs[i].shape.y)) <= COL_RADIUS*2) { return true; }
  }
  return false;
}

// Calls time-related functions
function updateTime(){
  updateCollidedPairs();
  updateShapeCreation();
  updateTimeLimit();
}

// Updates timer for game
function updateTimeLimit(){
  timer -= deltaTime;
}

// Updates shape creation timer
// Creates a new shape if timer hits 0 and the max pairs has not been reached
// Timer will linearly reset to smaller values as time goes on
function updateShapeCreation(){
  shapeCreationTime -= deltaTime;
  if(shapeCreationTime <= 0 && pairs.length < MAX_NUM_PAIRS)
  {
    pairs.push(createShapeHolePair());
    shapeCreationTime = TIME_CREATE_SHAPE - (TIME_CREATE_SHAPE_REDUCTION * (1 - (timer/TIME_LIMIT)));
  }
}

// Updates the time within collided pairs.
// Removes collided pair after their time hits 0
function updateCollidedPairs(){
  for(let i = 0; i < collidedPairs.length; i++)
  {
    collidedPairs[i].updateTime();
    if(collidedPairs[i].time <= 0){
      collidedPairs.splice(i, 1);
      i--;
    }
  }
}

// Returns whether the time limit hit 0
function timeUp(){
  return timer <= 0;
}

// ----------------------SIMON SWIPES CODE----------------------
let GAME_START_X;
let GAME_END_X;
let GAME_START_Y;
let GAME_END_Y;
let GAME_WIDTH;
let GAME_HEIGHT;

let U;
let R;
let D;
let L;
let DIRECTION_ARRAY;

let INITIAL_ARROWS;
let TIME_SHOW_ARROW;
let TIME_BETWEEN_ARROWS;
let TIME_SHOW_CORRECT;
let TIME_SHOW_INCORRECT;
let TIME_SHOW_SET_COMPLETE;
let NUM_SETS_TO_INCREASE;
let TEXT_OFFSET;
let TEXT_SIZE;
let STARTING_LIVES;
let SET_COMPLETE_SIZE;
let SWIPE_TEXT_SIZE;

let arrows;

let pressed;
let showingArrows;
let arrowTracker;
let arrowTime;
let correctTime;
let incorrectTime;
let showingSetCompleteTime;
let showingCorrect;
let showingIncorrect;
let showingSetComplete;
let lives;
let showSwipeText;
let playArrowSound;

function simonSwipesSetup(){
  drawBackground = true;
  
  GAME_START_X = 35;
  GAME_START_Y = 43
  GAME_END_X = 536;
  GAME_END_Y = 332;
  GAME_WIDTH = GAME_END_X - GAME_START_X;
  GAME_HEIGHT = GAME_END_Y - GAME_START_Y;
  
  U = 0;
  R = 1;
  D = 2;
  L = 3;
  DIRECTION_ARRAY = [U, R, D, L];
  
  INITIAL_ARROWS = 3;
  STARTING_LIVES = 3;
  TIME_SHOW_ARROW = 1000;
  TIME_BETWEEN_ARROWS = 500;
  TIME_SHOW_CORRECT = 1000;
  TIME_SHOW_INCORRECT = 1000;
  TIME_SHOW_SET_COMPLETE = 1500;
  NUM_SETS_TO_INCREASE = 2;
  TEXT_OFFSET = 25;
  TEXT_SIZE = 20;
  SWIPE_TEXT_SIZE = 50;
  SET_COMPLETE_SIZE = 50;
  
  arrows = [];
  pressed = false;
  arrowTracker = 0;
  addArrows(INITIAL_ARROWS);
  showingArrows = true;
  arrowTime = TIME_SHOW_ARROW;
  correctTime = TIME_SHOW_CORRECT;
  incorrectTime = TIME_SHOW_INCORRECT;
  showingSetCompleteTime = TIME_SHOW_SET_COMPLETE;
  showingCorrect = false;
  showingIncorrect = false;
  showingSetComplete = false;
  score = 0;
  lives = STARTING_LIVES;
  showSwipeText = false;
  playArrowSound = true;
}

function simonSwipesDraw(){
  SSDrawBackground();
  SSGameDraw();
}


function simonSwipesMousePressed(){
  SSUserInterfaceMousePressed();
  SSGameMousePressed();
}

function simonSwipesMouseReleased(){
  pressed = false;
}

function simonSwipesMouseDragged(){
  if(!pressed || showingArrows || showingIncorrect) { return; }
  
  showSwipeText = false;
  let correctSwipe;
  if(movedX >= 20){ // Right
    pressed = false;
    correctSwipe = checkRight();
  }else if(movedX <= -20){ // Left
    pressed = false;
    correctSwipe = checkLeft();
  }else if(movedY >= 20){ // Down
    pressed = false;
    correctSwipe = checkDown();
  }else if(movedY <= -20){ // Up
    pressed = false;
    correctSwipe = checkUp();
  }
  
  if(pressed) { return; }
  
  if(correctSwipe){
    correctUpdate();
  }
  else{
    incorrectUpdate();
  }
}

function SSDrawBackground(){
  image(simonSwipesScreen, 0, 0);
  strokeWeight(0);
  fill("white");
  rect(GAME_START_X, GAME_START_Y, GAME_END_X - GAME_START_X, GAME_END_Y - GAME_START_Y);
}

function SSGameDraw(){
  SSDrawText();
  if(showSwipeText) {
    drawSwipeText();
  }
  
  if(lives == 0){
    drawGameOver();
  }else if(showingArrows){
    showArrows();
  }else if(showingCorrect){
    showCorrect();
  }else if(showingIncorrect){
    showIncorrect();
  }else if(showingSetComplete){
    showSetComplete();
  }
  
  if(playArrowSound) {
    arrowSound.play();
    playArrowSound = false;
  }
}

function SSUserInterfaceMousePressed(){
  if(mouseX >= 9 && mouseX <= 57 &&
    mouseY >= 9 && mouseY <= 36) // Back to level select
  {
    gameState = "LEVEL SELECT";
    simonSwipesBGM.stop();
    mainMenuBGM.loop();
  }
}

function SSGameMousePressed(){
  if(lives > 0){
    pressed = true;
  }else{
    if(GAME_START_X + (5*GAME_WIDTH/16) <= mouseX &&
       mouseX <= GAME_START_X + (5*GAME_WIDTH/16) + (3*GAME_WIDTH/8) &&
       GAME_START_Y + (5*GAME_HEIGHT/8) <= mouseY &&
       mouseY <= GAME_START_Y + (5*GAME_HEIGHT/8) + (3*GAME_HEIGHT/16)){
      simonSwipesSetup();
    }
  }
}

function showArrows(){
  if(arrowTracker >= arrows.length){
    showingArrows = false;
    arrowTracker = 0;
    showSwipeText = true;
    playArrowSound = false;
  }else{
    if(arrowTime > 0){
      if(checkRight()){
        drawRight();
      }else if(checkLeft()){
        drawLeft();
      }else if(checkUp()){
        drawUp();
      }else{
        drawDown();
      }
    }else if(arrowTime <= -TIME_BETWEEN_ARROWS || arrowTracker == arrows.length - 1){
      arrowTracker++;
      arrowTime = TIME_SHOW_ARROW;
      //playArrowSound = arrowTracker >= arrows.length;
      if(arrowTracker != arrows.length) { arrowSound.play(); }
    }
    arrowTime -= deltaTime;
  }
}

function showCorrect(){
  if(correctTime <= 0){
    showingCorrect = false;
    correctTime = TIME_SHOW_CORRECT;
  }
  
  drawCheckMark();
  correctTime -= deltaTime;
}

function showIncorrect(){
  if(incorrectTime <= 0){
    showingIncorrect = false;
    incorrectTime = TIME_SHOW_INCORRECT;
    arrowTracker = 0;
    showingArrows = true;
    playArrowSound = true;
  }
  
  drawX();
  incorrectTime -= deltaTime;
}

function showSetComplete(){
  if(showingSetCompleteTime <= 0){
    showingSetCompleteTime = TIME_SHOW_SET_COMPLETE;
    showingSetComplete = false;
    showingArrows = true;
    playArrowSound = true;
  }
  
  drawSetComplete();
  showingSetCompleteTime -= deltaTime;
}

function correctUpdate(){
  correctSound.play();
  if(arrowTracker == arrows.length - 1){
    score++;
    arrowTracker = 0;
    arrows = [];
    addArrows(INITIAL_ARROWS + Math.floor(score/NUM_SETS_TO_INCREASE));
    //print(arrows);
    showingSetComplete = true;
    playArrowSound = true;
  }else{
    arrowTracker++;
    showingCorrect = true;
  }
}

function incorrectUpdate(){
  incorrectSound.play();
  showingIncorrect = true;
  lives--;
}

function addArrows(numAdd){
  for(let i = 0; i < numAdd; i++){
    arrows.push(random(DIRECTION_ARRAY));
  }
}

function checkRight(){
  return arrows[arrowTracker] == R;
}

function checkLeft(){
  return arrows[arrowTracker] == L;
}

function checkUp(){
  return arrows[arrowTracker] == U;
}

function checkDown(){
  return arrows[arrowTracker] == D;
}

function SSDrawText(){
  textAlign(CENTER);
  textSize(TEXT_SIZE);
  noStroke();
  fill("black");
  text("Score: " + score, GAME_START_X + (GAME_WIDTH/4), GAME_START_Y + TEXT_OFFSET);
  text("Lives: " + lives, GAME_START_X + (3*GAME_WIDTH/4), GAME_START_Y + TEXT_OFFSET);
}

function drawRight(){
  fill("purple");
  noStroke();
  triangle(GAME_START_X + (3*GAME_WIDTH/4), GAME_START_Y + (GAME_HEIGHT/2),
           GAME_START_X + (5*GAME_WIDTH/8), GAME_START_Y + (GAME_HEIGHT/4),
           GAME_START_X + (5*GAME_WIDTH/8), GAME_START_Y + (3*GAME_HEIGHT/4));
  rect(GAME_START_X + (5*GAME_WIDTH/16), GAME_START_Y + (3*GAME_HEIGHT/8),
           GAME_WIDTH/3, GAME_HEIGHT/4);
}

function drawLeft(){
  fill("blue");
  noStroke();
  triangle(GAME_START_X + (GAME_WIDTH/4), GAME_START_Y + (GAME_HEIGHT/2),
           GAME_START_X + (3*GAME_WIDTH/8), GAME_START_Y + (GAME_HEIGHT/4),
           GAME_START_X + (3*GAME_WIDTH/8), GAME_START_Y + (3*GAME_HEIGHT/4));
  rect(GAME_START_X + (5*GAME_WIDTH/16), GAME_START_Y + (3*GAME_HEIGHT/8),
           GAME_WIDTH/3, GAME_HEIGHT/4);
}

function drawUp(){
  fill("orange");
  noStroke();
  triangle(GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (GAME_HEIGHT/8),
           GAME_START_X + (GAME_WIDTH/3), GAME_START_Y + (11*GAME_HEIGHT/32),
           GAME_START_X + (2*GAME_WIDTH/3), GAME_START_Y + (11*GAME_HEIGHT/32));
  rect(GAME_START_X + (7*GAME_WIDTH/16), GAME_START_Y + (5*GAME_HEIGHT/16),
           GAME_WIDTH/8, GAME_HEIGHT/2);
}

function drawDown(){
  fill("rgb(231,208,9)");
  noStroke();
  triangle(GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (7*GAME_HEIGHT/8),
           GAME_START_X + (GAME_WIDTH/3), GAME_START_Y + (21*GAME_HEIGHT/32),
           GAME_START_X + (2*GAME_WIDTH/3), GAME_START_Y + (21*GAME_HEIGHT/32));
  rect(GAME_START_X + (7*GAME_WIDTH/16), GAME_START_Y + (3*GAME_HEIGHT/16),
           GAME_WIDTH/8, GAME_HEIGHT/2);
}

function drawX(){
  stroke("red");
  strokeWeight(6);
  line(GAME_START_X + (GAME_WIDTH/4), GAME_START_Y + (3*GAME_HEIGHT/4),
       GAME_START_X + (3*GAME_WIDTH/4), GAME_START_Y + (GAME_HEIGHT/4));
  line(GAME_START_X + (GAME_WIDTH/4), GAME_START_Y + (GAME_HEIGHT/4),
       GAME_START_X + (3*GAME_WIDTH/4), GAME_START_Y + (3*GAME_HEIGHT/4));
}

function drawCheckMark(){
  stroke("green");
  strokeWeight(6);
  line(GAME_START_X + (3*GAME_WIDTH/8), GAME_START_Y + (5*GAME_HEIGHT/8),
       GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (3*GAME_HEIGHT/4));
  line(GAME_START_X + (5*GAME_WIDTH/8), GAME_START_Y + (GAME_HEIGHT/4),
       GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (3*GAME_HEIGHT/4));
}

function drawSetComplete(){
  textAlign(CENTER);
  textSize(SET_COMPLETE_SIZE);
  stroke("black");
  strokeWeight(3);
  fill("green");
  text("Set Complete!", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (7*GAME_HEIGHT/16));
  text("+1 Score", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (5*GAME_HEIGHT/8));
}

function drawGameOver(){
  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(GAME_START_X + (5*GAME_WIDTH/16), GAME_START_Y + (5*GAME_HEIGHT/8), 3*GAME_WIDTH/8, 3*GAME_HEIGHT/16);
  textAlign(CENTER);
  fill("black");
  strokeWeight(0);
  textSize(40);
  text("GAME OVER", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (GAME_HEIGHT/3));
  textSize(30);
  text("Score: " + score, GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (GAME_HEIGHT/2));
  text("Play again?", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (3*GAME_HEIGHT/4));
}

function drawSwipeText(){
  textAlign(CENTER);
  textSize(SWIPE_TEXT_SIZE);
  noStroke();
  fill("black");
  text("Click & Drag", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (GAME_HEIGHT/2) - 4);
  text("To Swipe!", GAME_START_X + (GAME_WIDTH/2), GAME_START_Y + (GAME_HEIGHT/2) + 44);
}

// ------------------STAR CLICKER CODE------------------
function starClickerDraw(){
  SCGameDraw();
}

function starClickerMousePressed(){
  if(mouseX >= 8 && mouseX <= 54 &&
    mouseY >= 6 && mouseY <= 36) // Back to level select
  {
    gameState = "LEVEL SELECT";
    clearInterval(intervalID);
    starClickerBGM.stop();
    mainMenuBGM.loop();
  }
}

//Defining variables
let starcount;
let randomSize;
let starGameScore;
let starDrawCounter;
let mouseIsClickedOnStar;
let mouseIsClickedOffStar;
let lostStarPoint;
let starTimerOver;
let starGameTimer;
let addStarPoints;
let intervalID;

//canvas setup *Remove canvas when transferring to replit*
function starClickerSetup() {
  drawBackground = false;
  textAlign(LEFT);
  
  intervalID = setInterval(starGameTimerFunc, 1000);
  
  starcount = 0;
  randomSize = 0;
  starGameScore = 0;
  starDrawCounter = 0;
  mouseIsClickedOnStar = false;
  mouseIsClickedOffStar = false;
  lostStarPoint = false;
  starTimerOver = false;
  starGameTimer = 60;
  addStarPoints = true;
}

function starGameTimerFunc() {
  if (starGameTimer > 0) {
    starGameTimer--;
  }
}

//functions
function SCMouseClicked() {
  if (colorCursor[1] == 248) {
    mouseIsClickedOnStar = true;
  }

  if (colorCursor[1] != 248) {
    mouseIsClickedOffStar = true;
  }
}

function star(x, y, radius1, radius2, npoints) {
  angleMode(RADIANS);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  rotate(-0.3);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//Game
function SCGameDraw() {
  if (starTimerOver == false && starGameTimer > 0) {
    colorCursor = get(mouseX, mouseY);
    //timer display
    fill(255);
    rect(33, 337, 510, 30);
    fill(0);
    textSize(20);
    text("Seconds Remaining: " + starGameTimer, 40, 360);
    if (starDrawCounter == 0) {
      if (addStarPoints == false) {
        starGameScore = 0;
      }
      //black space
      background(200);
      image(starClickerScreen, 0, 0);
      strokeWeight(0);
      fill(0);
      rect(33, 35, 510, 303);
      noStroke();
      //score
      strokeWeight(2);
      stroke(255);
      fill(255);
      rect(33, 35, 510, 30);
      fill(0);
      strokeWeight(0);
      textSize(32);
      text("Score:" + starGameScore, 375, 60);
      //loss message
      if (lostStarPoint == true && addStarPoints == true) {
        fill(255, 0, 0);
        text("Missed Star -1 Point", 50, 60);
      }
      if (lostStarPoint == false && starGameScore >= 1) {
        fill(0, 173, 0);
        text("Clicked Star +1 Point", 50, 60);
      }
      //star
      fill(252, 248, 106);
      randomSize = random(0.5, 1);
      star(
        random(10, 420),
        random(250, 325),
        22.5 * randomSize,
        52.2 * randomSize,
        5
      );
      starDrawCounter = starDrawCounter + 1;
    }

    if (mouseIsClickedOnStar == true) {
      correctSound.play();
      lostStarPoint = false;
      mouseIsClickedOnStar = false;
      mouseIsClickedOffStar = false;
      addStarPoints = true;
      starGameScore = starGameScore + 1;
      starDrawCounter = starDrawCounter - 1;
    }

    if (mouseIsClickedOffStar == true && starGameScore >= 1) {
        if (addStarPoints == true) {
        incorrectSound.play();
      }
      mouseIsClickedOffStar = false;
      starGameScore = starGameScore - 1;
      starDrawCounter = starDrawCounter - 1;
      lostStarPoint = true;
    }
    if (starGameTimer == 0) {
      starTimerOver = true;
    }
  } else {
    clearInterval(intervalID);
    addStarPoints = false;
    background(200);
    image(starClickerScreen, 0, 0);
    noStroke();
    fill(126, 181, 252);
    rect(33, 35, 510, 330);
    fill(255);
    textSize(40);
    text("Out of Time", 160, 175);
    text("Final Score:" + starGameScore, 150, 220);
    text("Click Anywhere to Restart", 60, 280);
    if (mouseIsPressed) {
      starClickerSetup();
    }
  }
}

// ------------------THANKS FOR PLAYING CODE------------------
function thanksForPlayingDraw(){
  image(thankYouForPlayingScreen, 0, 0);
}

function thanksForPlayingMousePressed(){
  if(mouseX >= 24 && mouseX <= 155 &&
    mouseY >= 27 && mouseY <= 81) // Back to level select
  {
    gameState = "LEVEL SELECT";
  }
}