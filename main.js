mustache_x = 0;
mustache_y = 0;

function preload()
{
    mustache = loadImage("https://i.postimg.cc/wxCqgjNH/mustache.png");
}

function setup()
{
    canvas = createCanvas(300 ,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Instalized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x: " + results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x-30;
        console.log("nose y: " + results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, mustache_x, mustache_y, 60, 45);
}

function take_snapshot()
{
    save('Filter_photo.png');
}