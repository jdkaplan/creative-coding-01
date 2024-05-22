const fourHundred = 400;
const fourFifths = 4 / 5;
const zero = 0;
const angle = 3.14 / 6;

function setup() {
    createCanvas(fourHundred, fourHundred);
    background(220);
    stroke("green");

    push();
    translate(fourHundred / 2, 0);
    tree(100);
    pop();
}

function draw() { }

function random(lo, hi) {
    return (hi - lo) * Math.random() + lo;
}

function tree(length) {
    if (length < 1) {
        return;
    }

    strokeCap(SQUARE);
    strokeWeight(2);

    line(zero, zero, zero, length);

    {
        push();
        translate(zero, length);

        let branch = length * fourFifths * random(0.75, 1);
        let angle = random(3.14 / 12, 3.14 / 4);
        {
            push();
            rotate(angle);

            tree(branch);
            pop();
        }

        {
            push();
            rotate(-angle);

            tree(branch);
            pop();
        }

        pop();
    }
}
