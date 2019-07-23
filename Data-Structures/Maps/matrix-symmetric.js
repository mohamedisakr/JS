function isSymmetric(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i !== j && matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}

let matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

let isOk = isSymmetric(matrix);
