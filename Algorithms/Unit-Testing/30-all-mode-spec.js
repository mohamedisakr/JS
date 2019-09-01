describe('Find all modes.', () => {

    it('All modes should be [6, 7, 12]', () => {
        let v = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
        let data = getMultimodal(v);
        expect(data).toEqual([6, 7, 12]);
    });

    it('All modes should be [3, 6, 9]', () => {
        let v = [3, 3, 5, 6, 6, 6, 9, 9];
        let data = getMultimodal(v);
        expect(data).toEqual([3, 6, 9]);
    });

    it('All modes should be [7, 9]', () => {
        let v = [1, 2, 3, 4, 7, 7, 7, 9, 9, 10];
        let data = getMultimodal(v);
        expect(data).toEqual([7, 9]);
    });
});