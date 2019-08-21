describe('produces the list of all values that occur more than once', () => {
    it('should be [7, 9]', () => {
        let a = [1, 2, 3, 4, 7, 7, 7, 9, 9, 10];
        let more = findOccurences(a);
        expect(more).toEqual([7, 9]);
    });

    it('should be []', () => {
        let a = [1, 9, 10, 20, 12, 34, 43];
        let more = findOccurences(a);
        expect(more).toEqual([]);
    });

    it('should be [7]', () => {
        let a = [1, 2, 3, 4, 7, 7];
        let more = findOccurences(a);
        expect(more).toEqual([7]);
    });
});
