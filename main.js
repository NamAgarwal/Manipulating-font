left_wrist = 0;
right_wrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function modeLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
    }
}
function draw(){
    background('#a2e4fa');

    textSize(difference);
    fill('#f70515');
    text('Naman', 80, 100);
}