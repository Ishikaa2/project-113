function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(200, 180);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    circle(285, 20, 5);
    circle(300, 20, 10);
    circle(320, 20, 15);
    circle(340, 20, 10);
    circle(355, 20, 5);
    rect(20, 20, 250, 2);
    rect(20, 20, 2, 440);
    rect(20, 460, 250, 2);
    circle(285, 460, 5);
    circle(300, 460, 10);
    circle(320, 460, 15);
    circle(340, 460, 10);
    circle(355, 460, 5);
    rect(370, 460, 250, 2);
    rect(620, 20, 2, 442);
    rect(370, 20, 250, 2);
    image(video, 120, 100, 400, 300);
}

function take_snapshot()
{
    save('image_captured.png');
}