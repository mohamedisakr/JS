
const _vector = new WeakMap();

class Bag {
    // #vector = [];
    constructor() { _vector.set(this, []); }
    add(item) { _vector.get(this).push(item); }
    get isEmpty() { return _vector.get(this).length === 0; }
    get size() { return _vector.get(this).length; }
}

let a = [100, 99, 101, 120, 98, 107, 109, 81, 101, 90];
let bag = new Bag();
for (let i = 0; i < a.length; i++) {
    bag.add(a[i]);
}
console.log(bag.size);