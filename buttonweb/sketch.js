let url = 'https://io.adafruit.com/api/v2/mooooo/feeds/button/data';
let counter = 0;

let img;

function preload() {
    img = loadImage('img/morning.png');
    img2 = loadImage('img/night.png');
}


function setup() {
    createCanvas(800, 600);
    background(img2);
    textSize(32);
    text('Offline', 400, 550);
    fill(0, 0, 0);
}

function draw() {

    //    fill(255, 10);
    //    rect(0, 0, width, height);
    if (counter % 80 == 0) {
        getData();
    }
    //counter++;
}

function getData() {
    let data;
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        let resize = map(data, 1, 0, 25, 150);
        image(img);
        text('Online', 400, 550);
        fill(0, 102, 153);
    });
}
