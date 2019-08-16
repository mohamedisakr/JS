
const _vector = new WeakMap();

export class Queue {
    constructor() { _vector.set(this, []) }
    get size() { return _vector.get(this).length; }
    get isEmpty() { return _vector.get(this).length === 0; }
    enqueue(item) {
        //if (this.isEmpty) { throw new Error('Queue is empty.'); }
        _vector.get(this).push(item);
    }
    dequeue() {
        if (this.isEmpty) { throw new Error('Queue is empty.'); }
        return _vector.get(this).shift();
    }
}

