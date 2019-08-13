function sort(a) {
    let n = a.length - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j]; //[a[j], a[j + 1]] = [a[j + 1], a[j]];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
            //console.log(`i = ${i}, j = ${j} ===> (${i}, ${j})`);
            // console.log(`(${i}, ${j})`);
        }
        console.log(a);
    }
}

let list = [3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += list[i] + '<br/>';
}
document.write(txt);