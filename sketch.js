const zero = +'';
const one = [zero].length;
const two = one + one;
const three = "two".length;
const four = "four".length;
const five = "three".length;
const fourHundred = two * two * two * two * five * five;
const fourFifths = two * two / five;
const half = one / two;

function setup() {
    let brown = color("brown");

    createCanvas(fourHundred, fourHundred);
    background(fourHundred / two);

    push();
    translate(fourHundred / two, zero);
    tree(fourHundred / four, brown);
    pop();
}

function draw() { }

function tree(branchLength, branchColor) {
    let green = color("green");
    if (branchLength < one) {
        return;
    }

    stroke(branchColor)

    strokeCap(SQUARE);
    strokeWeight(two);

    line(zero, zero, zero, branchLength);

    push();
    translate(zero, branchLength);

    {
        branchColor = lerpColor(branchColor, green, half)
        branchLength = branchLength * fourFifths * random(three / four, one);
        let angle = random(one / four, three / four);
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
