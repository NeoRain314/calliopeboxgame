let box: number[] = [];
let player: number[] = [];
let display: number[] = [];
let gamePause = false
player = [2, 3];
box = [2, 0];
gamePause = false
drawPlayer(player[0], player[1]);
 
//__________ Player ___________________________________________________________________________
function drawPlayer (x: number, y: number) {
    led.plot(x, y);
    checkCollision();
}
 
 
//__________ Box ___________________________________________________________________________
basic.forever(function () { 
    if(gamePause == false){
        for(let i = 0; i < 5; i++) {   
        basic.pause(400);
        moveBox();
        }
        newBox();
    }
})
 
 
function newBox (){
    led.unplot(box[0], box[1]);
    box[0] = randint(0, 4);
    box[1] = 0;
    drawBox();
    moveBox();
}
 
function drawBox () {
    led.unplot(box[0], box[1]);
    led.plot(box[0], box[1]);
}
 
function moveBox () {
    
    led.unplot(box[0], box[1]);
    box[1] += 1;
    drawBox();
    checkCollision();
}
 
 
//__________ GameElements ___________________________________________________________________________
function checkCollision() {
    if ( compareElements(player[0], box[0]) ){
        if ( compareElements(player[1], box[1]) ){
            gameOver();
        }
    }
}
 
function compareElements(i: number, h: number) {
    return i == h;
}
 
 
//__________ Game ___________________________________________________________________________
function gameOver(){
    music.playTone(Note.C, music.beat())
    basic.setLedColor(0xff0000);
    led.enable(true);
    led.setBrightness(255);
 
    basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
 
 
 
    
}
 
function pauseGame() {
    if(gamePause == false){
        gamePause = true;
    }else{
        gamePause = false
    }
}
 
 
//__________ Control ___________________________________________________________________________
input.onButtonPressed(Button.A, function () {
    if(gamePause == false){
        led.unplot(player[0], player[1]);
        player[0] -= 1;
    }
    drawPlayer(player[0], player[1])
    
})
 
 
 
input.onButtonPressed(Button.B, function () {
    if(gamePause == false){
        led.unplot(player[0], player[1]);
        player[0] += 1;
    }
    drawPlayer(player[0], player[1])
})
 
input.onPinPressed(TouchPin.P0, function () {
    
    if(gamePause == false){
        gamePause = true;
        led.setBrightness(50);
        led.enable(true);
        basic.setLedColor(0xff0000);
        basic.pause(10000);
    }else {
        led.setBrightness(0);
        gamePause = false;
        led.enable(false);
        basic.pause(1000);
        
    }
    
    /*
    led.setBrightness(100);
    basic.setLedColor(0xff0000);
    led.enable(true);
    */
})
