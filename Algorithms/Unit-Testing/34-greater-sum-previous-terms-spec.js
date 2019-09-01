describe("Find all terms of a finite sequence of integers that are greater than the sum of all previous terms .", () => {
    it("Test 1 ==> 6", () => {
        const a = [1, 2, 4, 8, 12, 32, 64, 128]; // [1, 2, 4, 8, 16, 32, 64, 128]; //[1, 2, 3, 6, 12, 24, 48, 96];
        const ans = greaterThanSum(a);
        expect(ans.length).toBe(6);
    });

    it("Test 2 ==> 6", () => {
        const a = [1, 3, 6, 11, 22, 45, 90];
        const ans = greaterThanSum(a);
        expect(ans.length).toBe(6);
    });

    it("Test 3 ==> 4", () => {
        const a = [1, 2, 3, 5, 10, 22, 44, 90];
        const ans = greaterThanSum(a);
        expect(ans.length).toBe(4);
    });

    it("Test 4 ==> 1", () => {
        const a = [1, 2, 3, 4, 5, 6];
        const ans = greaterThanSum(a);
        expect(ans.length).toBe(1);
    });

    it("Test 5 ==> 0", () => {
        const a = [2, 1, 3, 4, 5, 6];
        const ans = greaterThanSum(a);
        expect(ans.length).toBe(0);
    });
});
