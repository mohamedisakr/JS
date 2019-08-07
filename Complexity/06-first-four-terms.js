/*  
Use pseudocode to describe the algorithm that puts
the first four terms of a list of real numbers of arbitrary
length in increasing order using the insertion sort
*/

/** Cormen
INSERTION-SORT(A)
1   for j = 2 to A.Length
2       key = A[j]
3       // Insert A[j] into the sorted sequence A[1..j-1].
4       i = j - 1
5       while i >= 0 and A[i] > key           
6           A[i + 1] = A[i]
7           i = j - 1
8       A[i + 1] = key
*/

/** Cormen 
function sort(a) {
    let n = a.length;
    for (let j = 1; j < n; j++) {
        let key = a[j];
        i = j - 1;
        while (i >= 0 && a[i] > key) {
            a[i + 1] = a[i];
            i--;
        }
        a[i + 1] = key;
    }
}
*/

// Cormen revised by me
function sort(a) {
    let n = a.length;
    for (let j = 1; j < 4; j++) {
        let key = a[j];
        let i = 0;
        for (i = j - 1; i >= 0 && a[i] > key; i--) { a[i + 1] = a[i]; }
        a[i + 1] = key;
    }
}

let list = [3, 7, 4, 9, 5, 2, 6, 1];  //[5, 2, 4, 6, 1, 3];  // [3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += `<h3>${list[i]}</h3>`;
}
document.write(txt);

/* // https://en.wikipedia.org/wiki/Insertion_sort
function sort(a) {
    let i = 1;
    while (i < 4) {
        let x = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > x) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = x;
        i++;
    }
}

let list = [3, 7, 4, 9, 5, 2, 6, 1];  //[3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += `<h3>${list[i]}</h3>`;
}
document.write(txt);
*/

/*
// does NOT work
procedure sort first four (a1, a2, ..., an: real numbers with n >= 4)
    for i := 2 to min(4,n)
        for j := 1 to i-1
            if a[i] < a[j] then
                temp := a[i]
            for k := j to i-1
                a[k] := a[k+1]
            a[j] := temp
    return a1, a2, ..., an
*/
/*
function sort(a) {
    for (let i = 1; i < 4; i++) {
        for (let j = 0; i < i - 1; i++) {
            if (a[i] < a[j]) {
                let temp = a[i];
                for (let k = j; k < i - 1; k++) { a[k + 1] = a[k]; }
                a[j] = temp;
            }
        }
    }
    return a;
}
*/
