class Form {
constructor(){
    this.input = createInput("name")
    this.input.position(displayWidth/2 - 40, displayHeight/2 - 80)
    this.button = createButton("Play")
    this.button.position(displayWidth/2 + 30, displayHeight/2 )
    this.greeting = createElement("h3")
}
display(){


    var title = createElement("H1")
title.html("Car Race")
title.position(displayWidth/2 - 50, 20)





this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()

player.name = this.input.value()
playercount = playercount+1
player.index = playercount
player.update()
player.updatecount(playercount)

this.greeting.html("Hi "+ name + " ! ")
this.greeting.position(displayWidth/2 - 70, displayHeight/4 )
})
}
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()

}
}