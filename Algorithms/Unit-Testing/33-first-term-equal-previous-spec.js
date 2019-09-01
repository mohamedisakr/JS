describe("Find the first term of a sequence of integers that equals some previous term.", () => {
    it("Test 1 ==> 4", () => {
        let arr = [4, 6, 2, 3, 1, 5, 4];
        let pos = getEqualToPrevious(arr);
        expect(pos).toBe(4);
    });

    it("Test 2 ==> 1", () => {
        let arr = [1, 3, 4, 1, 7, 8];
        let pos = getEqualToPrevious(arr);
        expect(pos).toBe(1);
    });

    it("Test 3 ==> -1", () => {
        let arr = [1, 2, 3, 4, 5, 6];
        let pos = getEqualToPrevious(arr);
        expect(pos).toBe(-1);
    });

    it("Test 4 ==> 4", () => {
        let arr = [3, 4, 2, 1, 4, 9]; //, 6
        let pos = getEqualToPrevious(arr);
        expect(pos).toBe(4);
    });

    it("Test 5 ==> 1", () => {
        let arr = [3, 4, 1, 7, 8, 1, 2];
        let pos = getEqualToPrevious(arr);
        expect(pos).toBe(1);
    });
});
