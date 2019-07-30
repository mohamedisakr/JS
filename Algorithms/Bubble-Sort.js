function sort(list) {
    let n = list.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
}

let list = [3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += list[i] + '<br/>';
}
document.write(txt);