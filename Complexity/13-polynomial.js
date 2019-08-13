/*
procedure polynomial(c, a0, a1, … , an: real numbers)
power := 1
y := a0
for i := 1 to n
    power := power ∗ c
    y := y + ai ∗ power
return y {y = ancn + an−1cn−1 + ⋯ + a1c + a0}
*/

function polynomial(c, a) {
    let n = a.length;
    let power = 1;
    let y = a[0];
    for (let i = 1; i < n; i++) {
        power *= c;
        y += a[i] * power;
    }
    return y;
}

// 3*x^2 + x + 1 [1, 1, 3]
// x^2 + 4*x + 4 [4, 4, 1]
let x = 2;
let arr = [4, 4, 1];    //[1, 1, 3];
let res = polynomial(x, arr);
console.log(res);