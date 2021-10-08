noseX=0
noseY=0
rightwristX=0
leftwristX=0
difference=0
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(450,450);
    canvas.position(560,120);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#6F7377')
    document.getElementById("square_length").innerHTML="The length of the square will be "+difference+"px."
    fill('#42DC11')
    stroke('#42DC11')
    square(noseX,noseY,difference);
}
function modelLoaded(){
console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX = "+noseX+" NoseY = "+noseY);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        console.log("Right Wrist X = "+rightwristX+ "Left Wrist X = "+leftwristX);
        difference=floor(leftwristX-rightwristX);
        console.log("Difference between writs is = "+difference);
    
    }
}
