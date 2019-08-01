function insert(x, a) {
    a.push(0);
    let n = a.length;
    let pos = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (x < a[i]) {
            a[i + 1] = a[i];
            pos = i;
        }
    }
    a[pos] = x;
    return a;
}


let item = 7;  //9; //0;  //20;
let array = [1, 3, 4, 5, 6, 8, 9, 11];
let arr = insert(item, array);
let n = arr.length;
let txt = ``;
for (let k = 0; k < n; k++) {
    console.log(arr[k]);
    txt += `${arr[k]}, `;
}
document.write(`<h4>${txt}</h4>`);



/*
a.push(0);
let n = a.length;
let pos = -1;
for (let i = n - 2; i >= 0; i--) {
    if (x < a[i]) {
        a[i + 1] = a[i];
        pos = i;
    }
}
a[pos] = x;
console.log('location at ' + pos);
*/


// else { 
//     a[i + 1] = x; 
// }
//console.log(a[i]);

/*
while (x>a[i]) {
        i++;
}
// n = 8 // i = 5
for (let k = 0; k = (n -i); k++) {
    a[n -k+1] = a[n -k];
}
a[i] = x;

let txt = ``;
for (let j = 0; j < n; j++) {
    txt += `${a[j]}, `;
}
document.write(`<h4>${txt}</h4>`);
*/

/*
let pos = -1;
let i = 0;
let n = a.length;

while (x > a[i]) {
    ++i;
    pos = i;
}
a.push(0);

for (let j = n; j <= i; j--) {
    a[j] = a[j - 1];
}
a[pos] = x;

let txt = ``;
for (let k = 0; k < n + 1; k++) {
    txt += `${a[k]}, `;
}
document.write(`<h4>${txt}</h4>`);
*/

/*
for (let j = i + 1; j <= n + 1; j++) {
    a[j + 1] = a[j];
    console.log('j = ' + j + ' a[j] = ' + a[j]);
}
a[pos] = x;
*/

/*
for (let i = 0; i < a.length; i++) {
    if(x > a[i]){continue;}
    else{
        pos=i;
        a[i+1]=a[i];
    }
}
a[pos] =x;
document.write(`<h4>${x} is located at position ${pos}.</h4>`);
*/
