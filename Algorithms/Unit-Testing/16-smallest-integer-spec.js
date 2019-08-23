describe('Find the smallest integer in a finite sequence of natural numbers.', () => {
    it('The smallest integer should be 1', () => {
        let a = [1, 3, 4, 5, 6, 8, 9, 11];
        let min = find(a);
        expect(min).toBe(1);
    });

    it('The array is empty', () => {
        let a = [];
        let min = find(a);
        expect(min).toBe(undefined);
    });

});