describe("Determine the correct position in which to insert a new element in an already sorted list.", () => {
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
});
