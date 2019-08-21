describe('Find the location of the largest even integer in the list.', () => {
    it('the location should be 8', () => {
        let arr = [1, 2, 6, 3, 4, 5, 10, 13, 18];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(8);
    });

    it('the location should be -1', () => {
        let arr = [1, 3, 5, 7, 9, 11, 13];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(-1);
    });

    it('the location should be 10', () => {
        let arr = [1, 3, 5, 7, 9, 11, 13, 19, 21, 33, 12];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(10);
    });

    it('the location should be 0', () => {
        let arr = [12, 1, 3, 5, 7, 9, 11, 13, 19, 21, 33];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(0);
    });

    it('the location should be 11', () => {
        let arr = [12, 1, 3, 5, 7, 9, 11, 13, 19, 21, 33, 20];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(11);
    });

    it('the location should be 7', () => {
        let arr = [12, 1, 3, 5, 7, 9, 11, 20, 13, 19, 21, 33];
        let pos = getLargestEvenInteger(arr);
        expect(pos).toBe(7);
    });
});