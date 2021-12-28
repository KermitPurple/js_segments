const SEG_LENGTH = 100;
const NUMBER_OF_SEGS = 10; // must be >= 1
let segments;

function setup(){
    createCanvas(windowWidth, windowHeight);
    let prev = new Segment(
        createVector(windowWidth / 2, windowHeight / 2),
        SEG_LENGTH,
        0,
        color(255)
    );
    segments = [prev];
    for(let i = 1; i < NUMBER_OF_SEGS; i++){
        let seg = new Segment(
            prev.end.copy(),
            SEG_LENGTH,
            0,
            color(255)
        );
        segments.push(seg);
        prev = seg;
    }
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
