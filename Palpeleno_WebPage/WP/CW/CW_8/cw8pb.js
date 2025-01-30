let blueTeam = {
    x: 10,
    y: 10,
    xInc: 3,
    yInc: 3,
    scale: .1,
    img: document.getElementById("blueTeam"),
    rotation: 1,

    // Draw the blueTeam
    draw: function () {
        context.drawImage(this.img, this.x, this.y);

        var centerX = this.x + this.img.width / 5;  //adding all this does nothings  wtf !!
        var centerY = this.y + this.img.height / 5;
        
        context.translate(this.img, centerX, centerY);
        
        context.rotate(this.img + .5);
        context.translate(centerX, centerY);
        context.scale(this.scale *= .1,this.scale *= .1 );
       
        
       
    },

    // Move the blueTeam
    move: function () {
        this.x += this.xInc;
        this.y += this.yInc;

        // Bounce of the left and right canvas edges
        if (this.x < 0 || this.x + this.img.width > canvas.width) {
            this.xInc *= -1;

        }
        if (this.y < 0 || this.y + this.img.height > canvas.height) {
            this.yInc *= -1;


        }


    },


};

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// Draw blueTeam at starting position
context.save();
blueTeam.draw();
context.restore();

// Used to cancel animation
let animFrameId;

// Start the animation when the mouse is on the canvas
canvas.addEventListener("mouseover", function (e) {
    animFrameId = window.requestAnimationFrame(drawFrame);
});
// Stop the animation when the mouse is moved off the canvas

canvas.addEventListener("mouseout", function (e) {
    window.cancelAnimationFrame(animFrameId);
});

// Draw a single frame
function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    blueTeam.draw();
    blueTeam.move();
    context.restore();
    animFrameId = window.requestAnimationFrame(drawFrame);
}