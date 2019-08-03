/*
i ← 1
while i < length(A)
    x ← A[i]
    j ← i - 1
    while j >= 0 and A[j] > x
        A[j+1] ← A[j]
        j ← j - 1
    end while
    A[j+1] ← x
    i ← i + 1
end while
*/

// INSERTION-SORT => https://en.wikipedia.org/wiki/Insertion_sort
function sort(a) {
    let i = 1;
    let n = a.length;
    while (i < n) {
        let x = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > x) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = x;
        i = i + 1;
    }
}

let list = [3, 7, 4, 9, 5, 2, 6, 1];  //[3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += `<h3>${list[i]}</h3>`;
}
document.write(txt);

/*
INSERTION-SORT => Rosen
function sort(a) {
    for (let j = 1; j < a.length; j++) {
        let i = 0;
        while (a[j] > a[i]) { i = i + 1; }
        let key = a[j];
        for (let k = 0; k < (j - i - 1); k++) {
            a[j - k] = a[j - k - 1];
        }
        a[i] = key;
    }
}

*/

/*
INSERTION-SORT => CLRS
1 for j = 2 to A.length
2       key = A[j]
3       // Insert A[j]  into the sorted sequence A[1..j-1]
4       i = j-1
5       while i > 0 and A[i] > key
6           A[i + 1] = A[i]
7           i = i-1
8       A[i + 1] = key
*/

/*
function sort(list) {
    let n = list.length;
    for (let j = 1; j < n; j++) {
        let key = list[j];
        // Insert A[j]  into the sorted sequence A[1..j-1]
        let i = j - 1;
        while (i > 0 && list[i] > key) {
            list[i + 1] = list[i];
            i = i - 1;
        }
        list[i + 1] = key;
    }
}
*/
