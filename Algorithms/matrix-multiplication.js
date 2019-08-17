let a = [
    [1, 1],
    [2, 1]   
];

let b = [
    [2, 1],
    [1, 1]   
];

let c = [
    [0, 0],
    [0, 0]    
];

let row = 2;
let col = 2;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        for (let k = 0; k < row; k++) {
            c[i][j] += a[i][k] * b[k][j];
        }
    }
}

for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c[i].length; j++) {
        console.log(c[i][j] + " ");
    }
    console.log();
}
