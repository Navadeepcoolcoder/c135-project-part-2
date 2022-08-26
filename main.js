video = "";



function preload()
{
   
}

function setup()
{
    canvas = createCanvas(250, 250); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(380,380); 
    video.hide();
}

function draw() 
{
    image(video, 0, 0, 250, 250);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    
}
