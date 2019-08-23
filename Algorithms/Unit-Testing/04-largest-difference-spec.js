describe('The largest difference', () => {
    it('should be 80', () => {
        let a = [1, 9, 20, 100, 43, 12, 34];
        let max = getLargestDifference(a);
        expect(max).toBe(80);
    });

    it('should be 33', () => {
        let a = [1, 9, 20, 10, 43, 12, 34];
        let max = getLargestDifference(a);
        expect(max).toBe(33);
    });
});