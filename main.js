Mx= 0;
My= 0;

function preload(){
mustache= loadImage("https://i.postimg.cc/vHdhZsHK/m.png");
}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("posenet is initialised")
}

function gotposes(results){
    if (results.length > 0){
        console.log(results);
        Mx= results[0].pose.nose.x-28;
        My=results[0].pose.nose.y;
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, Mx, My, 50, 50);


}

function take_snapshot(){
    save("Mustache_filter");
}