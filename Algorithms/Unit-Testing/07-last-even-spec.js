describe('Find the location of the last even integer in the list.', () => {
    it('the location should be 5', () => {
        let arr = [1, 2, 3, 4, 5, 6];
        let pos = getLastEvenInteger(arr);
        expect(pos).toBe(5);
    });

    it('the location should be -1', () => {
        let arr = [1, 3, 5, 7, 9, 11, 13];
        let pos = getLastEvenInteger(arr);
        expect(pos).toBe(-1);
    });

    it('the location should be 10', () => {
        let arr = [1, 3, 5, 7, 9, 11, 13, 19, 21, 33, 12];
        let pos = getLastEvenInteger(arr);
        expect(pos).toBe(10);
    });
});