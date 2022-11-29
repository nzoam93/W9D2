document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    // Set line width
    ctx.lineWidth = 5;
    ctx.fillStyle = 'blue';

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(0, 0, 400, 60);
    //left, up, right, down

    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(50,20,10,0,2* Math.PI)
    ctx.stroke();

});
