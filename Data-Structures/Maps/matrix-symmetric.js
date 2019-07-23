
function isSymmetric(matrix) {
    let isOk = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if(i !== j && matrix[i][j] !== matrix[j][i]) {
              isOk = false;
              break;
          }
        }        
    }
    return isOk;
}

let matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

let isOk = isSymmetric(matrix);
