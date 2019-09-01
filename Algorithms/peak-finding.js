function findLinear(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        if (a[i] >= a[i - 1] && a[i] >= a[i + 1]) {
            return i;
        }
    }
    return -1;
}

/**
 * Find a peak element in an array of integers. 
 * An array element is peak if it is NOT smaller than its neighbors
 * @param {*} a an array of integers
 * @test FAILED in test 2 (when input array is sorted in strictly increasing order, 
 * the last element is always a peak element. ) 
 * return the second max in position (n - 2)
 */
function findBinary(a) {
    let lo = 0;
    let hi = a.length - 1;
    while (hi >= lo) {
        let m = Math.floor((lo + hi) / 2);
        if (
            (m === 0 || a[m] >= a[m - 1]) &&
            (m === hi - 1 || a[m] >= a[m + 1])
        ) {
            return m;
        } else if (m > 0 && a[m] < a[m - 1]) {
            hi = m - 1;
        } else {//if (m < hi && a[m] < a[m + 1]) {
            lo = m + 1;
        }
    }
    return -1;
}

/* first impl. without handling edge cases
function findBinary(a) {
    let lo = 0;
    let hi = a.length - 1;
    while (hi >= lo) {
        let m = Math.floor((lo + hi) / 2);
        if (a[m] < a[m - 1]) {
            hi = m - 1;
        } else if (a[m] < a[m + 1]) {
            lo = m + 1;
        } else {
            return m;
        }
    }
    return -1;
}
*/
