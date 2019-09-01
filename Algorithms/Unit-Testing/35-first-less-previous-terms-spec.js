describe("Find the first term of a sequence of positive integers that is less than the immediately preceding term.", () => {
    it("Test 1 ==> 3", () => {
        const a = [1, 2, 4, 3, 7, 8];
        let pos = find(a);
        expect(pos).toBe(3);
    });

    it("Test 2 ==> -1", () => {
        const a = [1, 2, 3, 4, 7, 8];
        let pos = find(a);
        expect(pos).toBe(-1);
    });

    it("Test 3 ==> 2", () => {
        const a = [2, 4, 3, 7, 8];
        let pos = find(a);
        expect(pos).toBe(2);
    });

    it("Test 4 ==> 4", () => {
        const a = [2, 4, 7, 8, 3];
        let pos = find(a);
        expect(pos).toBe(4);
    });
});
