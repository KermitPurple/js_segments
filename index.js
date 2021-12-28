const SEG_LENGTH = 10;
const NUMBER_OF_SEGS = 200; // must be >= 1
let COLORS;
let segments = [];

function get_color(){
    if(typeof this.count === 'undefined')
        this.count = 0;
    return COLORS[this.count++ % COLORS.length];
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    COLORS = [
        color(255, 0, 0), // red
        color(255, 165, 0), // orange
        color(255, 255, 0), // yellow 
        color(0, 128, 0), // green
        color(0, 0, 255), // blue
        color(75, 0, 130), // indigo
        color(238, 130, 238), // violet
    ];
    for(let i = 1; i < NUMBER_OF_SEGS; i++)
        segments.push(new Segment(
            createVector(windowWidth / 2, windowHeight / 2),
            SEG_LENGTH,
            0,
            get_color()
        ));
}

function draw(){
    background(0);
    let prev = null;
    segments.forEach(seg=>{
        if(prev === null)
            seg.follow(createVector(mouseX, mouseY));
        else
            seg.follow(prev.start);
        prev = seg;
        seg.calc_end();
        seg.draw();
    });
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
