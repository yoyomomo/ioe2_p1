//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/mooooo/feeds/testdata';

var data = 0;

//buttons from https://p5js.org/reference/#/p5/createButton
let button1;
let button2;
let button3;
let button4;
let button5;

function setup() {
    createCanvas(1000, 600);
    button1 = createButton('sad');
    button1.position(160, 300);
    button1.mousePressed(sad);

    button2 = createButton('mad');
    button2.position(320, 300);
    button2.mousePressed(mad);

    button3 = createButton('neutral');
    button3.position(480, 300);
    button3.mousePressed(meh);

    button4 = createButton('happy');
    button4.position(640, 300);
    button4.mousePressed(hap);

    button5 = createButton('excited');
    button5.position(800, 300);
    button5.mousePressed(excite);

}

function sad() {
    let val1 = color(118, 146, 183);
    background(val1);
}

function mad() {
    let val2 = color(172, 21, 31);
    background(val2);
}

function meh() {
    let val3 = color(130, 130, 130);
    background(val3);
}

function hap() {
    let val4 = color(229, 242, 136);
    background(val4);
}

function excite() {
    let val5 = color(255, 194, 61);
    background(val5);
}

function draw() {

    textSize(24);
    text('How are you feeling today?', 300, 100);
}

function press() {
    data = 1;
    console.log(data);
    sendData(data);
}

function off() {
    data = 0;
    console.log(data);
    sendData(data);
}

function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_NZln29uCvYGrDLAGifnoYpjEZHq6"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
