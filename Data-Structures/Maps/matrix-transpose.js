function transpose(matrix, m, n) {
    let b = new Array(n);
    for (let i = 0; i < n; i++) {
        b[i] = new Array(m);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            b[j][i] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            document.write(b[i][j] + " ");
        }
        document.write("<br/>");
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

m = 2;
n = 3;
transpose(matrix, m, n);
