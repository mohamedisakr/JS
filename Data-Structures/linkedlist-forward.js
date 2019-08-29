/*
Commonly asked Linked List interview questions:
    1 Reverse a Singly Linked List 
    2 Remove Duplicates from a Linked List 
    3 Delete Node with a Given Key 
    4 Insertion Sort of a Linked List 
    5 Intersection Point of Two Lists 
    6 Nth from Last Node 
    7 Swap Nth Node with Head 
    8 Merge Two Sorted Linked Lists 
    9 Merge Sort 
    10 Reverse Even Nodes 
    11 Rotate a Linked List 
    12 Reverse k Elements 
    13 Add Two Integers 
    14 Copy Linked List with Arbitrary Pointer
*/

'use strict';
/**
 * element / node of a linked list
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 *  singly linked list
 */
class ForwardList {
    /**
    *  remove all the elements of the forward list container, thus making its size 0.
    */
    clear() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    constructor() {
        this.clear();
    }

    /** Check if linked list is empty */
    get isEmpty() { return this.head === null; }

    /** Return size of the linked list  */
    get size() { return this._length; }

    /**
     * Insert the element at the first position on list. 
     * The value from this function is copied to the space before first element in the container. 
     * The size of forward list increases by 1.
     * @param {*} value New node value
     */
    pushFront(value) {
        const node = new Node(value);
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this._length++;
    }

    push(value) {
        const node = new Node(value);
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this._length++;
    }

    insertAfter() {
        let value;
        let array;
        if (arguments.length === 2) {
            value = arguments[0];
            array = arguments[1];

            for (let first = this.head; first; first = first.next) {
                if (first.value === value) {
                    // console.log(`first.value = ${first.value}`);
                    for (let i = array.length - 1; i >= 0; i--) { //for (let i = 0; i < array.length; i++) {  //
                        let node = new Node(array[i]);
                        node.next = first.next;
                        first.next = node;
                        this._length++;
                    }
                }
            }
        }
    }

    /**
     * Pop or remove elements from a forward list from the front. 
     * The value is removed from the list from the beginning, and 
     * the container size is decreased by 1.
     */
    popFront() {
        if (this.isEmpty) { throw new Error('List is empty.'); }
        this.head = this.head.next;
        this._length--;
    }

    popBack() { // let a = [10, 20, 40, 30, 70, 100, 200];
        if (this.isEmpty) { throw new Error('List is empty.'); }
        let pre = null;
        let first = this.head;
        while (first.next) {
            pre = first;
            first = first.next;
        }
        this.tail = pre;
        // console.log(`tail = ${this.tail.value}`);
        pre.next = null;
        this._length--;
    }

    /**
     * remove all the values from the forward list that correspond 
     * to the value given as parameter to the function
     * @param {*value}  The value of the element to be removed is passed as the parameter. 
     * @test TEST CASE 4 SUB 1 : consecutive duplicate elements ==>> NOT WORKING
     */
    remove(value) {
        for (let first = this.head; first; first = first.next) {
            if (first.value === value) {
                this.popFront();
                break; // return; // 
            }
            if (first.next) {
                if (first.next.value === value) {
                    first.next = first.next.next;
                    this._length--;
                }
            }
        }
    }

    /**
     * remove elements from a container next to the specified position or from a range.
     * @param {*} position previous of the element to be removed
     * @param {*} startingPosition range specified using start and end
     * @param {*} endingPosition range specified using start and end
     * @test CASE 2 : starting Position, ending Position ==>> NOT WORKING
     */
    eraseAfter() {
        if (arguments.length === 1) {
            let position = arguments[0];
            let index = 0;
            for (let first = this.head; first; first = first.next, index++) {
                if (position === index) {
                    first.next = first.next.next;
                    this._length--;
                }
            }
        }
        // else if (arguments.length === 2) {
        //     let startingPosition = arguments[0] - 1;
        //     let endingPosition = arguments[1] - 1;
        //     console.log(`startingPosition = ${startingPosition}, endingPosition = ${endingPosition}`);
        //     let index = 0;
        //     for (let first = this.head; first; first = first.next, index++) {
        //         console.log(`index = ${index}`);
        //         if ((startingPosition >= index) || (endingPosition <= index)) {
        //             // alert('im here');
        //             first.next = first.next.next;
        //             this._length--;
        //         }

        //     }
        // }
    }

    /**
     * transfers the elements in the range of first+1 to last from a given forward_list 
     * to another forward_list. The elements are inserted after the element pointed to 
     * by position in the parameter
     * @param {*} position Specifies the position in the forward_list after which the new elements are to be inserted.
     * @param {*} otherList Specifies the list from which elements are to be inserted.
     * @param {*} first Specifies the iterator after which insertion is to be done
     * @param {*} last Specifies the iterator till which insertion is to be done.
     *///position, otherList, firstNode, lastNode
    spliceAfter(otherList) {
        let first = this.head;
        let second = first.next;
        // console.log(`second = ${second.value}`);
        for (let begin = otherList.head; begin; begin = begin.next) {
            first.next = begin;
            first = first.next;
            this._length++;
        }
        first.next = second;
    }

    isEven(value) { return (value % 2) === 0; }

    isOdd(value) { return (value % 2) === 1; }

    isPrime(n) {
        if (n === 1) { return false; }
        if (n === 2) { return true; }
        if (n > 2 && n % 2 === 0) { return false; }
        for (let i = 3; i < Math.sqrt(n) + 1; i += 2) {
            if (n % i === 0) { return false; }
        }
        return true;
    }

    /**
     * remove all the values from the list that correspond true to the predicate 
     * or condition given as parameter to the function. The function iterates 
     * through every member of the list container and removes all the element 
     * that return true for the predicate.
     * @param {*} predicate The predicate in the form of a function pointer 
     * or function object is passed as the parameter
     */
    removeIf(predicate) {
        for (let first = this.head; first; first = first.next) {
            if (predicate(first.value)) {
                this.remove(first.value);
            }
        }
    }

    /**
 * assign values to list, weather array or repeated elements.
 */
    assgin() {
        if (arguments.length === 1) {
            let a = arguments[0];
            for (let i = a.length - 1; i >= 0; i--) {
                this.pushFront(a[i]);
            }
        }
        else if (arguments.length === 2) {
            let x = arguments[0];
            let n = arguments[1];
            for (let i = 0; i < n; i++) {
                this.pushFront(x);
            }
        }
    }

    /**
     * Return the middle value of the linked list
     * @param {The head of linked list} theHead 
     */
    getMiddle(theHead) {
        // base case
        if (theHead === null) { return theHead; }

        // define 2 pointer fast = 2x slow
        let slow = theHead;
        let fast = theHead.next;

        // move fast = 2x slow
        while (fast !== null) {
            fast = fast.next;
            if (fast !== null) {
                slow = slow.next;
                fast = fast.next;
            }
        }
        // console.log(slow);
        return slow;
    }

    /**
     * takes two lists, each of which is sorted in increasing order, 
     * and merges the two together into one list which is in increasing order
     * @param {* a the first linked list} 
     * @param {* b the second linked list} 
     */
    sortToMerge(a, b) {
        let result = null;
        // base case
        if (a === null) { return b; }
        if (b === null) { return a; }

        // compare node value in the left list with node value in the right list
        if (a.value <= b.value) {
            result = a;
            result.next = this.sortToMerge(a.next, b);
        }
        else {
            result = b;
            result.next = this.sortToMerge(a, b.next);
        }
        return result;
    }

    /**
     * sort linked list in incrasing order
     * @param {*theHead} the head of the linked list 
     */
    sort(theHead) {
        // Base case : if head is null
        if (theHead === null || theHead.next === null) { return theHead; }

        // get the middle of the list
        let middle = this.getMiddle(theHead);
        let middleNext = middle.next;

        // set the next of the middle to null
        middle.next = null;

        // apply sort to the left list
        let left = this.sort(theHead);

        // apply sort to the right list
        let right = this.sort(middleNext);

        // merge the left and right lists
        let sorted = this.sortToMerge(left, right);
        // console.log(sorted);
        return sorted;
    }

    /**
     * reverses the order of the elements present in the linked list.
     */
    reverse() {
        // create empty array
        let a = [];

        // loop through linked list and populate array
        for (let first = this.head; first; first = first.next) {
            a[a.length] = first.value;
        }

        a.reverse();

        // clear the original linked list elements
        this.clear();

        // use assign function to insert nodes from the populated array
        this.assgin(a);
    }
    /**
     * Iterate throgth list nodes and print its values
     */
    show(theHead) {
        for (let first = theHead; first; first = first.next) {
            console.log(first.value);
        }
    }

    /** Return the head (the first node) of the linked list */
    // get head() { return this.head; }
    // set head(val) { this.head = val; }

    /** Return the tail (the last node) of the linked list */
    // get tail() { return this.tail; }
    // set tail(val) { this.tail = val; }
}