class Segment{
    constructor(start, length, theta, color){
        this.start = start;
        this.length = length;
        this.theta = theta;
        this.color = color;
        this.calc_end();
    }

    calc_end(){
        this.end = createVector(
            this.start.x + this.length * Math.cos(this.theta),
            this.start.y + this.length * Math.sin(this.theta)
        );
    }

    // https://www.youtube.com/watch?v=hbgDqyy8bIw&t=7s
    follow(target){
        let diff = target.copy();
        diff.sub(this.start);
        this.theta = diff.heading();
        diff.setMag(this.length);
        diff.mult(-1);
        this.start = diff.copy();
        this.start.add(target);
    }

    draw(){
        stroke(this.color);
        line(
            this.start.x,
            this.start.y,
            this.end.x,
            this.end.y
        );
    }
}
