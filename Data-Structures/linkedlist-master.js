'use strict';

/*
  LinkedList

  Name your class / constructor (something you can call new on) LinkedList

  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.

  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

// const _item = new WeakMap();
// const _node = new WeakMap();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // this.index = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    _test(a, b) {
        return a === b;
    }

    _testIndex(search, __, i) {
        return search === i;
    }

    _find(value, test = this._test) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (test(value, current.value, i, current)) {
                return current;
            }
            current = current.next;
            i++;
        }
        return null;
    }

    get(index) {
        const node = this._find(index, this._testIndex);
        if (!node) { return null; }
        return node.value;
    }

    delete(index) {
        if (index === 0) {
            const current = this.head;
            if (current) { this.head = current.next; }
            else { this.head = null; this.tail = null; }
            this.length--;
            return current.value;
        }
        const node = this._find(index - 1, this._testIndex);
        const excise = node.next;
        if (!excise) return null;
        node.next = excise.next;
        if (node.next && !node.next.next) {
            this.tail = node.next;
        }
        this.length--;
        return excise.value;
    }

    pop() {
        return this.delete(this.length - 1);
    }
}

let ll = new LinkedList();
ll.push('to');
// console.log(ll.head);
// console.log(ll.tail);
console.log(ll.length);
console.log(ll.delete(0));
console.log(ll.length);

/*
let first = new Node('to');
let second = new Node('be');
let third = new Node('or');

first.next = second;
second.next = third;

console.log(third.next);

let head = first;
while (head) {
    console.log(head.value);
    head = head.next;
}
*/

// let head =first;
// while(head){
//     console.log(head.value);
//     head = head.next;
// }

/*
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

let head = node1;
while(head){
    console.log(head.value);
    head = head.next;
}
*/
