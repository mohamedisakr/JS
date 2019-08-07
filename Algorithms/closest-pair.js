class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function getClosestPair(points) {
    let n = points.length;
    let min = 1000000000;
    let pair = []
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            let val = ((points[j].x - points[i].x) ** 2) + ((points[j].y - points[i].y) ** 2);
            if (val < min) {
                if (pair.length > 0) { pair.pop(); pair.pop(); }
                min = val;
                pair.push(a[i]);
                pair.push(a[j]);
            }
        }
    }
    console.log(pair);
    return pair;
}

// 2 method using objects
let p1 = { x: 2, y: 3 };
let p2 = { x: 12, y: 30 };
let p3 = { x: 40, y: 50 };
let p4 = { x: 5, y: 1 };
let p5 = { x: 12, y: 10 };
let p6 = { x: 3, y: 4 };

let a = [p1, p2, p3, p4, p5, p6];
let pair = getClosestPair(a);
for (let i = 0; i < pair.length; i++) {
    let point = pair[i];
    document.writeln(`Point ${i + 1} has x = ${point.x} and y = ${point.y}<br/>`);
}

let distance = parseFloat(((pair[1].x - pair[0].x) ** 2) + ((pair[1].y - pair[0].y) ** 2));
let value = distance ** (0.5);
document.write(`The smallest distance is ${value}`);

// **** to generate objects
// let points = [[2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4]];
// for(let i =0; i<points.length;i++){
//     for(let j=0;j<2;j++){
//         document.writeln(`let p${i + 1} ={x:${points[i][j]},y:${points[i][j]}};<br/>`);
//     }
// }

// 1 method using classes
/*
let p1 = new Point(2, 3);
let p2 = new Point(12, 30);
let p3 = new Point(40, 50);
let p4 = new Point(5, 1);
let p5 = new Point(12, 10);
let p6 = new Point(3, 4);

let a = [p1, p2, p3, p4, p5, p6];
let pair = getClosestPair(a);
for (let i = 0; i < pair.length; i++) {
    let point = pair[i];
    document.writeln(`Point ${i + 1} has x = ${point.x} and y = ${point.y}<br/>`);
}

let distance = parseFloat(((pair[1].x - pair[0].x) ** 2) + ((pair[1].y - pair[0].y) ** 2));
let value = distance ** (0.5);
document.write(`The smallest distance is ${value}`);
*/

// for (let i = 0; i < a.length; i++) {
//     let point = a[i];
//     document.writeln(`Point ${i + 1} has x = ${point.x} and y = ${point.y}<br/>`);
// }

// let f = { x: 2, y: 3 };
