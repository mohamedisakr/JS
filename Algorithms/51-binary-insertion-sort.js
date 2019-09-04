// slader
function sort(a) {
    let n = a.length;
    for (let k = 1; k < n; k++) {
        let i = 0;
        let j = k;
        while (i < j) {
            let m = Math.floor((i + j) / 2);
            if (a[k] > a[m]) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        let temp;
        if (a[k] <= a[i]) {
            temp = a[k];
            for (let p = 0; p <= k - i - 1; p++) {
                a[k - p] = a[k - p - 1];
            }
        }
        a[i] = temp;
    }
    console.log(a);
}

// geek for geek
/*
function binarySearch(a, item, low, high) {
    if (high <= low) {
        return item > a[low] ? low + 1 : low;
    }

    let mid = (low + high) / 2;

    if (item == a[mid]) {
        return mid + 1;
    }

    if (item > a[mid]) {
        return binarySearch(a, item, mid + 1, high);
    }
    return binarySearch(a, item, low, mid - 1);
}

// Function to sort an array a[] of size 'n'
function insertionSort(a, n) {
    let i;
    let loc;
    let j;
    let k;
    let selected;

    for (i = 1; i < n; ++i) {
        j = i - 1;
        selected = a[i];

        // find location where selected sould be inseretd
        loc = binarySearch(a, selected, 0, j);

        // Move all elements after location to create space
        while (j >= loc) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = selected;
    }
}
*/

/*
function search(item, a) {
    let lo = 0;
    let hi = a.length - 1;
    if (hi <= lo) return item > a[low] ? low + 1 : low;

    let mid = Math.floor((lo + hi) / 2); //(low + high)/2;

    if (item == a[mid]) {
        return mid + 1;
    }

    if (item > a[mid]) {
        mid++;
        return search(item, a);
    }
    hi = mid - 1;
    return search(item, a);
}

function sort(a) {
    const n = a.length;
    let i;
    let loc;
    let j;
    let k;
    let selected;

    for (i = 1; i < n; ++i) {
        j = i - 1;
        selected = a[i];

        // find location where selected sould be inseretd
        loc = binarySearch(a, selected, 0, j);

        // Move all elements after location to create space
        while (j >= loc) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = selected;
    }
}
*/

// my old implementation
/*
function sort(a) {
    const n = a.length;
    for (let j = 1; j < n; j++) {
        let key = a[j];
        let i = j - 1;
        // we need to know beginning and end of the sorted sub-array
        // get the middle
        // compare with middle
        while (j > i) {
            let m = Math.floor((i + j) / 2);
            if (key > a[m]) {
                i = m + 1;
            } else {
                j = m;
            }
        }

        if (key <= a[i]) {
            a[i] = key;
        } else {
            return (a[j - 1] = key);
        }
    }
}
*/
