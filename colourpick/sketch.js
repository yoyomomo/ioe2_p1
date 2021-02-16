//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/mooooo/feeds/testdata';

var data = 0;
//colour picker layout from https://editor.p5js.org/Deseingalt/sketches/1r9Ewl2mR
var colPic;

var r;
var g;
var b;
var a;

function setup() {
    createCanvas(windowWidth, 400);
    colPic = createColorPicker(random(255));

    r = random(255);
    g = random(255);
    b = random(255);


}

function draw() {
    background(colPic.color());


    textSize(32);
    fill(r, g, b);
    text('Pick the lighting colour', 10, 30);

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
