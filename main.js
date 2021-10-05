function preload()
{
img=loadImage("bed.webp")
}

function setup()
{
    canvas=createCanvas(600,500)
    canvas.center()
}

function draw()
{
    image(img, 0,0,600,500)
    fill("#ff0000")
    text("Bed",100,100)
    noFill()
    stroke("#ff0000")
    rect(30,60,450,300)
}
