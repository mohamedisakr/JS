/*
procedure Horner(c, a0, a1, a2, … , an: real numbers)
y := an
for i := 1 to n
    y := y ∗ c + an−i
return y {y = ancn + an−1cn−1 + ⋯ + a1c + a0}
*/

function Horner(c, a) {
    let n = a.length;
    let y = a[0];
    for (let i = 1; i < n; i++) {
        y *= (c + a[i]); //y * (c + a[i]);
    }
    return y;
}

// 3*x^2 + x + 1 [1, 1, 3]
// x^2 + 4*x + 4 [4, 4, 1]
let x = 2;
let arr = [1, 1, 3]; //[4, 4, 1];    //
let res = Horner(x, arr);
console.log(res);