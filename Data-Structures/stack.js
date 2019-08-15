// let data = [];
const _items = new WeakMap();

class Stack {
    // #data = [];

    constructor() {
        _items.set(this, []);
    }

    push(item) {
        //data.push(item); 
        _items.get(this).push(item);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0) { throw new Error('Stack is empty'); }; // if (data.length === 0) { throw new Error('Stack is empty'); }
        return items.pop(); //data.pop(item);
    }

    peak() {
        const items = _items.get(this); // if (data.length === 0) { throw new Error('Stack is empty'); }
        if (items.length === 0) { throw new Error('Stack is empty'); }; //return data[data.length - 1];
        return items[items.length - 1];
    }

    get count() { return _items.get(this).length; }
}

// let stack = new Stack();