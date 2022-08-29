var canvas=new fabric.Canvas('myCanvas');

blockImageWidth=30;
blockImageHeight=30;

playerX=10;
playerY=10;

var playerObject="";
var blockImageObject="";
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject)
    })
}

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImageObject=Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImageObject)
    })
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true&&keyPressed=='80'){
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;
        console.log("shift e P foram pressionados juntos")
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }

    if(e.shiftKey==true&&keyPressed=='77'){
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        console.log("shift e M foram pressionados juntos")
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;
    }

    if(keyPressed=='38'){
        up();
        console.log("tecla para cima foi pressionada")
    }

    if(keyPressed=='40'){
        down();
        console.log("tecla para baixo foi pressionada")
    }

    if(keyPressed=='37'){
        left();
        console.log("tecla para esquerda foi pressionada")
    }

    if(keyPressed=='39'){
        right();
        console.log("tecla para direita foi pressionada")
    }

    if(keyPressed=='87'){
        newImage("wall.jpg")
        console.log("w")
    }

    if(keyPressed=='71'){
        newImage("ground.png")
        console.log("g")
    }

    if(keyPressed=='76'){
        newImage("light_green.png")
        console.log("l")
    }

    if(keyPressed=='84'){
        newImage("trunk.jpg")
        console.log("t")
    }

    if(keyPressed=='82'){
        newImage("roof.jpg")
        console.log("r")
    }

    if(keyPressed=='89'){
        newImage("yellow_wall.png")
        console.log("y")
    }

    if(keyPressed=='85'){
        newImage("unique.png")
        console.log("u")
    }

    if(keyPressed=='67'){
        newImage("cloud.jpg")
        console.log("c")
    }
}

function up(){
    if(playerY >= 0){
        playerY=playerY-blockImageHeight;
        console.log("altura da imagem do bloco= "+blockImageHeight);
        console.log("quando a tecla direcional cima for pressionada, X=",playerX+", Y=",playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    if(playerY <= 600){
        playerY=playerY+blockImageHeight;
        console.log("altura da imagem do bloco= "+blockImageHeight);
        console.log("quando a tecla direcional baixo for pressionada, X=",playerX+", Y=",playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left(){
    if(playerX > 0){
        playerX=playerX-blockImageWidth;
        console.log("altura da imagem do bloco= "+blockImageWidth);
        console.log("quando a tecla direcional esquerda for pressionada, X=",playerX+", Y=",playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    if(playerX < 1000){
        playerX=playerX+blockImageWidth;
        console.log("altura da imagem do bloco= "+blockImageWidth);
        console.log("quando a tecla direcional direita for pressionada, X=",playerX+", Y=",playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}