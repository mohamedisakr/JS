function buildIdentity(n) {
    // Create 1D array 
    grid = new Array(n);
    // Loop to create 2D array for every row in 1D array
    for (let i = 0; i < n; i++) {
        grid[i] = new Array(n);
    }
    // Populate the matrix with elements
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) { grid[i][j] = 1; }
            else { grid[i][j] = 0; }
        }
    }

    // print matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //console.log(grid[i][j]);
            document.write(grid[i][j] + " ");
        }
        document.write("<br/>")
    }
}

n = 3;
buildIdentity(n);
