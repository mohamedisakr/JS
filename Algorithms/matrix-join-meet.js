function join(a, b, m, n) {
    // Create 1D array
    let c = new Array(m);
    // Loop to create 2D array for every row in 1D array
    for (let i = 0; i < m; i++) {
        c[i] = new Array(n);
    }
    // Populate the matrix with elements
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            c[i][j] = 0;
        }
    }
    // Do the join operation
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i][j] === 0 && b[i][j] === 0) {
                c[i][j] = 0;
            }
            else {
                c[i][j] = 1;
            }
        }
    }
    // Show the resulting matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            document.write(c[i][j] + " ");
        }
        document.write("<br/>");
    }
}

/* ===================================================== */

function meet(a, b, m, n) {
    // Create 1D array
    let c = new Array(m);
    // Loop to create 2D array for every row in 1D array
    for (let i = 0; i < m; i++) {
        c[i] = new Array(n);
    }
    // Populate the matrix with elements
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            c[i][j] = 0;
        }
    }
    // Do the join operation
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (a[i][j] === 1 && b[i][j] === 1) {
                c[i][j] = 1;
            }
            else {
                c[i][j] = 0;
            }
        }
    }
    // Show the resulting matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            document.write(c[i][j] + " ");
        }
        document.write("<br/>");
    }
}

/**====================== */

let a = [
    [1, 0, 1],
    [0, 1, 0]
];

let b = [
    [0, 1, 0],
    [1, 1, 0]
];

let m = 2;
let n = 3;
meet(a, b, m, n);
