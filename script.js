var a = 0;
var b = 1;

var detail = 1000;
var dx = (b - a) / detail;

function f(x){
    return Math.sin(x);
}
function g(x){
    return 0;
}
function еxchangeValues(value1, value2) {
    var newValue = value1;
    value1 = value2;
    value2 = newValue;
}
function areaByMetodRectangles(a, b, f, g) {
    (a > b) ? еxchangeValues(a, b) : false;
    var sumOfAreas1 = 0,
        sumOfAreas2 = 0;
    for (var x = a; x < b; x += dx) {
        sumOfAreas1 += f(x) * dx;
        sumOfAreas2 += g(x) * dx;
    }
    return Math.abs(sumOfAreas2 - sumOfAreas1);
}

function areaByMethodTrapezoids(a, b, f, g) {
    (a > b) ? еxchangeValues(a, b) : false;
    var sumOfAreas1 = 0,
        sumOfAreas2 = 0;
    for (var x = a; x < b; x += dx) {
        sumOfAreas1 += (f(x) + f(x + dx)) / 2 * dx;
        sumOfAreas2 += (g(x) + g(x + dx)) / 2 * dx;
    }
    return Math.abs(sumOfAreas2 - sumOfAreas1);
}

function areaRatioMethod(a, b, f, g) {
    (a > b) ? еxchangeValues(a, b) : false;
    var maxValue = 0,
        minValue = 0;
    for (var x = a; x < b; x += dx) {
        if (maxValue < f(x) || maxValue < g(x)) {
            maxValue = Math.max(f(x), g(x));
        }
        if (minValue > f(x) || minValue > g(x)) {
            minValue = Math.min(f(x), g(x));
        }
    }
    areaOfRectangle = (maxValue - minValue) * (b - a);

    var dy = (maxValue - minValue) / detail;
    var hitting = 0;
    for (var y = minValue; y < maxValue; y += dy) {
        for (var x = a; x < b; x += dx) {
            if (y < Math.abs(f(x) - g(x))) {
                hitting++;
            }
        }
    }
    var ratio = hitting / (detail * detail);
    area = areaOfRectangle * ratio;
    return area;
}
console.log(areaByMetodRectangles (a, b, f, g));
console.log(areaByMethodTrapezoids(a, b, f, g));
console.log(areaRatioMethod(a, b, f, g));