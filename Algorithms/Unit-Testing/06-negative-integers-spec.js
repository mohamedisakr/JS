describe('Find the number of negative integers in the list.', () => {
    it('count should be 6', () => {
        let a = [-32, 28, -90, -88, 100, 97, 85, -14, 14, -22, 8, 69, 12, 17, 31, 43, 89, -65, 39, 23];
        let count = findNegatives(a);
        expect(count).toBe(6);
    });

    it('count should be 0', () => {
        let a = [28, 100, 97, 85, 14, 8, 69, 12, 17, 31, 43, 89, 39, 23];
        let count = findNegatives(a);
        expect(count).toBe(0);
    });
});