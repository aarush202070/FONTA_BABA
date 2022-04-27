function setup() {
    video =  createCapture(VIDEO);
    video.size(550,550);
    video.position( 50, 100);
    
    canvas= createCanvas(500,500);
    canvas.position(550, 113);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PuseANaat HOya Work kara');
}

function draw()
{
    background('#5df0e1')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}