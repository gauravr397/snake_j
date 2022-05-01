


function init(){
    canvas = document.getElementById("mycan");
    H = canvas.height=800;
    W = canvas.width=800;

    ctx = canvas.getContext('2d');
    gameover = false;
    rect ={
        x:20,
        y:20,
        h:40,
        w:40,
        speed:30,
    }
}
function draw(){
    //console.log("indraw");
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = "red"
    ctx.fillRect(rect.x,rect.y,rect.h,rect.w);
}
function update(){
    rect.x +=rect.speed;
    if(rect.x>W-rect.w || rect.x<0){
        rect.speed *= -1;
    }
    //console.log("inpdate");
}
function gameloop(){
    if (gameover == true){
        clearInterval(f);
    }
    //console.log("in gameloop");
    draw();
    update();
}
init();
var f =setInterval(gameloop,200); 
