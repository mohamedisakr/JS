describe("Describe an algorithm based on the binary search for determining the correct position in which to insert a new element in an already sorted list.", () => {
    it("Test 1 : @ the beginning", () => {
        const a = [3, 4, 5, 6];
        const item = 2;
        let pos = insert(item, a);
        expect(pos).toBe(0);
    });

    it("Test 2 : @ the end", () => {
        const a = [3, 4, 5, 6];
        const item = 7;
        let pos = insert(item, a);
        expect(pos).toBe(4);
    });

    it("Test 3 : @ the middle", () => {
        const a = [3, 4, 6, 7];
        const item = 5;
        let pos = insert(item, a);
        expect(pos).toBe(2);
    });

    it("Test 4 : @ the middle", () => {
        const a = [3, 5, 6, 7];
        const item = 4;
        let pos = insert(item, a);
        expect(pos).toBe(1);
    });
});
