var database
var gamestate=0, playercount
var form, player, game
var allplayers
var distance = 0
var car1, car2, car3, car4, cars

function setup(){
database = firebase.database()
createCanvas(displayWidth-20,displayHeight-30)

game = new Game()
game.readstate()
game.start()
}

function draw(){
if(playercount ==4){
game.updatestate(1)

}
 if (gamestate == 1 ) {
game.play()

 }
}