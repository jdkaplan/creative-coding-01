const fourHundred = 400;
const fourFifths = 4 / 5;
const zero = 0;
const angle = 3.14 / 6;
const half = 1 / 2;
function setup() {
    let brown = color("brown");

    createCanvas(fourHundred, fourHundred);
    background(220);

    push();
    translate(fourHundred / 2, 0);
    tree(100, brown);
    pop();
}

function draw() { }

function tree(branchLength, branchColor) {
    let green = color("green");
    if (branchLength < 1) {
        return;
    }

    stroke(branchColor)

    strokeCap(SQUARE);
    strokeWeight(2);

    line(zero, zero, zero, branchLength);

    push();
    translate(zero, branchLength);

    {
        branchColor = lerpColor(branchColor, green, half)
        branchLength = branchLength * fourFifths * random(0.75, 1);
        let angle = random(3.14 / 12, 3.14 / 4);
        {
            push();
            rotate(angle);

            tree(branchLength, branchColor);
            pop();
        }

        {
            push();
            rotate(-angle);

            tree(branchLength, branchColor);
            pop();
        }

        pop();
    }
}
