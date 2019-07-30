
function getMax(sequence) {
    let max = sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] > max) {
            max = sequence[i];
        }
    }
    return max;
}

let sequence = [8, 4, 11, 3, 10]; //[100, 1, 9, 20, 43, 12, 34];
let max = getMax(sequence);
document.write('<h2>' + max + '</h2>');