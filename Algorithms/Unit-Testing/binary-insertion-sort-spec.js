describe("Express the binary insertion sort in pseudocode.", () => {
    // it("Test 1", () => {
    //     const a = [7, 4, 3, 8, 1, 5, 4, 2];
    //     // sort(a);
    //     expect(a).toEqual([1, 2, 3, 4, 4, 5, 7, 8]);
    // });

    it("Test 1", () => {
        const a = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54];
        const n = a.length;
        sort(a, n);
        expect(a).toEqual([0, 12, 17, 23, 31, 37, 46, 54, 72, 88, 100]);
    });

    it("Test 2", () => {
        const a = [3, 2, 4, 5, 1, 6];
        const n = a.length;
        sort(a, n);
        expect(a).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("Test 3", () => {
        const a = [7, 4, 3, 8, 1, 5, 4, 2];
        const n = a.length;
        sort(a, n);
        expect(a).toEqual([1, 2, 3, 4, 4, 5, 7, 8]);
    });
});
