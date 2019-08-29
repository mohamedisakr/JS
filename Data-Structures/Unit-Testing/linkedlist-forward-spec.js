describe('Test Singly Linked List class.', () => {

    it('Is empty should be true', () => {
        let list = new ForwardList();
        expect(list.isEmpty).toBe(true);
    });

    it('Size should be 0', () => {
        let list = new ForwardList();
        expect(list.size).toBe(0);
    });

    it('pushFront CASE 1 EMPTY', () => {
        let list = new ForwardList();
        list.pushFront(3);

        expect(list.size).toBe(1);
        expect(list.isEmpty).toBe(false);

        expect(list.head.value).toBe(3);
        expect(list.tail.value).toBe(3);

        expect(list.head.next).toBe(null);
        expect(list.tail.next).toBe(null);
    });

    it('pushFront CASE 2 NONE EMPTY', () => {
        let list = new ForwardList();
        list.pushFront(3);
        list.pushFront(2);

        expect(list.size).toBe(2);
        expect(list.isEmpty).toBe(false);

        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(3);

        // expect(list.head.next).toEqual(new Node({ value: 3, next: null })); 
        expect(list.tail.next).toEqual(null);
    });

    it('assign with 1 arg (array)', () => {
        let list = new ForwardList();
        let a = [7, 89, 45, 6, 24, 58, 43]; //[1, 2, 3];
        list.assgin(a); //list.assignArray(a);

        expect(list.size).toBe(7);  //.toBe(3);
        expect(list.isEmpty).toBe(false);

        expect(list.head.value).toBe(7);    //.toBe(1);
        expect(list.tail.value).toBe(43);   //.toBe(3);

        // expect(list.head.next).toEqual(new Node({ value: 3, next: null })); 
        expect(list.tail.next).toEqual(null);
    });

    it('assign with 2 arg (int, int)', () => {
        let list = new ForwardList();
        let x = 10;
        let n = 5;
        list.assgin(x, n); // list.assignRepeat(x, n);

        expect(list.size).toBe(5);
        expect(list.isEmpty).toBe(false);

        // expect(list.head.value).toBe(10);
        // expect(list.tail.value).toBe(10);

        // expect(list.head.next).toEqual(new Node({ value: 3, next: null })); 
        // expect(list.tail.next).toEqual(null);
    });

    // working and throw empty error
    // it('popFront CASE 1 EMPTY', () => {
    //     let list = new ForwardList();
    //     list.popFront();
    //     expect(list.size).toBe(0);
    //     expect(list.isEmpty).toBe(true);
    // });

    it('popFront CASE 2 NON EMPTY', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        expect(list.size).toBe(5);

        list.popFront();
        list.show();    // console.log(list);
        expect(list.size).toBe(4);
        expect(list.isEmpty).toBe(false);
    });

    it('getMiddel ', () => {
        let list = new ForwardList();
        let a = [15, 10, 5, 20, 3, 2];
        list.assgin(a); // after assign a = [2 -> 3 -> 20 -> 5 -> 10 -> 15]
        let slow = list.getMiddle(list.head);
        expect(slow.value).toBe(5);
        expect(list.size).toBe(6);
    });

    it('sort ', () => {
        let list = new ForwardList();
        let a = [15, 10, 5, 20, 3, 2];
        list.assgin(a); // after assign a = [2 -> 3 -> 20 -> 5 -> 10 -> 15]
        list.head = list.sort(list.head);
        let b = [];
        for (let first = list.head; first; first = first.next) {
            b.push(first.value);
        }
        expect(b).toEqual([2, 3, 5, 10, 15, 20]);
        // console.log(b);
        expect(b.length).toBe(6);
    });

    it('remove node CASE 1 : Middle with value = 3', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        let val = 3;
        list.remove(val);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(4);
    });

    it('remove node CASE 2 : beginning with value = 1', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        let val = 1;
        list.remove(val);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(4);
    });

    it('remove node CASE 3 : end with value = 5', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        let val = 5;
        list.remove(val);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(4);
    });

    it('remove node CASE 4 SUB 1 : consecutive duplicate elements @ middle with value = 2', () => {
        let list = new ForwardList();
        let a = [1, 2, 2, 2, 5, 6]; // 1, 2, 2, 2, 5, 6, 7 => test case
        list.assgin(a);
        let val = 2;
        list.remove(val);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(4);
    });

    it('remove node CASE 4 SUB 2 : non consecutive duplicate elements with value = 2', () => {
        let list = new ForwardList();
        let a = [1, 2, 5, 2, 6, 2];
        list.assgin(a);
        let val = 2;
        list.remove(val);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(3);
    });

    // it('remove node CASE 4 SUB 3 : consecutive duplicate elements @ beginning with value = 1', () => {
    //     let list = new ForwardList();
    //     let a = [1, 1, 1, 2, 5, 6];
    //     list.assgin(a);
    //     let val = 1;
    //     list.remove(val);
    //     for (let first = list.head; first; first = first.next) {
    //         console.log(first.value);
    //     }
    //     expect(list.size).toBe(3); // result [2, 5, 6]
    // });

    it('remove if ODD predicate', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        // let val = 2;
        list.removeIf(list.isOdd);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(2); // result [2, 4]
    });

    it('remove if EVEN predicate', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        list.removeIf(list.isEven);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(3); // result [1, 3, 5]
    });

    it('remove if PRIME predicate', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        list.removeIf(list.isPrime);
        for (let first = list.head; first; first = first.next) {
            // console.log(first.value);
        }
        expect(list.size).toBe(2); // result [1, 4]
    });

    it('isPrime ', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        expect(list.isPrime(a[0])).toBe(false);
        expect(list.isPrime(a[1])).toBe(true);
        expect(list.isPrime(a[2])).toBe(true);
        expect(list.isPrime(a[3])).toBe(false);
        expect(list.isPrime(a[4])).toBe(true);
    });

    it('insertAfter ', () => {
        let list = new ForwardList();
        let a = [10, 20, 30];
        list.assgin(a);
        let b = [1, 2, 3];
        list.insertAfter(list.head.value, b);
        // list.show(list.head);
        expect(list.size).toBe(6); // result [10, 1, 2, 3, 20, 30]
    });

    it('clear ', () => {
        let list = new ForwardList();
        let a = [10, 20, 30];
        list.assgin(a);
        list.clear();
        list.show(list.head);
        expect(list.size).toBe(0); // result empty list
    });

    it('eraseAfter CASE 1 : position', () => {
        let list = new ForwardList();
        let a = [1, 2, 3, 4, 5];
        list.assgin(a);
        let position = 2;
        list.eraseAfter(position);
        // list.show(list.head);
        expect(list.size).toBe(4); // result [ 1, 2, 3, 5]
    });

    // ******************   NOT WORKING     *******************************
    // it('eraseAfter CASE 2 : starting Position, ending Position', () => {
    //     let list = new ForwardList();
    //     let a = [1, 2, 3, 4, 5, 6, 7, 8];
    //     list.assgin(a);
    //     let starting = 3;
    //     let ending = 6;
    //     list.eraseAfter(starting,ending);
    //     list.show(list.head);
    //     expect(list.size).toBe(4); // result [1, 2, 3, 8]
    // });

    it('spliceAfter test 1', () => {
        // initialising the forward lists 
        let list1 = new ForwardList();  //{ 10, 20, 30, 40 };
        let list2 = new ForwardList(); //{ 4, 9 }; 

        let a = [10, 20, 30, 40];
        let b = [4, 9];

        list1.assgin(a);
        list2.assgin(b);

        list2.spliceAfter(list1);

        // list2.show(list2.head);
        expect(list2.size).toBe(6); // result 4 => 10 => 20 => 30 => 40 => 9
    });

    it('spliceAfter test 2', () => {
        // initialising the forward lists 
        let list1 = new ForwardList();
        let list2 = new ForwardList();

        let a = [10, 20, 30];
        let b = [40, 50, 60];

        list1.assgin(a);
        list2.assgin(b);

        list2.spliceAfter(list1);

        // list2.show(list2.head);
        expect(list2.size).toBe(6); // result 40 => 10 => 20 => 30 => 50 => 60
    });

    it('reverse ', () => {
        let list = new ForwardList();
        let a = [10, 20, 40, 30, 70];
        list.assgin(a);

        list.reverse();
        // list.show(list.head);
        expect(list.size).toBe(5); // 70 => 30 => 40 => 20 => 10
    });

    it('push ', () => {
        let list = new ForwardList();
        let a = [10, 20, 40, 30, 70];
        for (let i = 0; i < a.length; i++) { list.push(a[i]); }
        list.push(100);
        // list.show(list.head);
        expect(list.size).toBe(6); // 10, 20, 40, 30, 70, 100
    });

    it('popBack ', () => {
        let list = new ForwardList();
        let a = [10, 20, 40, 30, 70, 100, 200];
        list.assgin(a);
        list.popBack();
        list.show(list.head);
        expect(list.size).toBe(6); // 10, 20, 40, 30, 70, 100
    });
});
