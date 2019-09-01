describe("The selection sort.", () => {
    it("Test 1", () => {
        const a = [5, 2, 1, 3, 6, 4];
        let data = sort(a);
        console.log(data);
        expect(data).toEqual([1, 2, 3, 4, 5, 6]);
        // expect(data.length).toBe(a.length);
    });
});
