describe("Peak finding algorithms.", () => {
    // it("Linear Test 1", () => {
    //     const a = [1, 2, 4, 6, 8, 7, 5, 3];
    //     let pos = findLinear(a);
    //     console.log(a[pos]);
    //     expect(pos).toBe(4);
    // });

    // it("Linear Test 2", () => {
    //     const a = [1, 2, 3, 4, 5, 6, 7, 8];
    //     let pos = findLinear(a);
    //     console.log(pos === -1 ? "no peak" : a[pos]);
    //     expect(pos).toBe(-1);
    // });

    // it("Linear Test 3", () => {
    //     const a = [8, 7, 6, 5, 4, 3, 2, 1];
    //     let pos = findLinear(a);
    //     console.log(pos === -1 ? "no peak" : a[pos]);
    //     expect(pos).toBe(-1);
    // });

    // it("Linear Test 4", () => {
    //     const a = [7, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    //     let pos = findLinear(a);
    //     console.log(pos === -1 ? "no peak" : a[pos]);
    //     expect(pos).toBe(1);
    // });

    //===========================================================

    it("Binary Test 1", () => {
        const a = [1, 2, 4, 6, 8, 7, 5, 3];
        let pos = findBinary(a);
        console.log(a[pos]);
        expect(pos).toBe(4);
    });

    it("Binary Test 2 : array is sorted in strictly increasing order", () => {
        const a = [1, 2, 3, 4, 5, 6, 7, 8];
        let pos = findBinary(a);
        console.log(pos === -1 ? "no peak" : a[pos]);
        expect(pos).toBe(7);
    });

    it("Binary Test 3 : array is sorted in strictly decreasing order", () => {
        const a = [8, 7, 6, 5, 4, 3, 2, 1];
        let pos = findBinary(a);
        console.log(pos === -1 ? "no peak" : a[pos]);
        expect(pos).toBe(0);
    });

    it("Binary Test 4", () => {
        const a = [7, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        let pos = findBinary(a);
        console.log(pos === -1 ? "no peak" : a[pos]);
        expect(pos).toBe(1);
    });
    
    // For input array {10, 20, 15, 2, 23, 90, 67}, there are two peak elements: 
    // 20 and 90. Note that we need to return any one peak element.
    it("Binary Test 5 : 2 peak elements 20 r 90", () => {
        const a = [10, 20, 15, 2, 23, 90, 67];
        let pos = findBinary(a);
        console.log(pos === -1 ? "no peak" : a[pos]);
        expect(pos).toBe(1);
    });

     it("Binary Test 6 : all elements of array are same, every element is a peak element", () => {
        const a = [10, 10, 10, 10, 10, 10, 10];
        let pos = findBinary(a);
        console.log(pos === -1 ? "no peak" : a[pos]);
        expect(pos).toBe(3);
    });
});
