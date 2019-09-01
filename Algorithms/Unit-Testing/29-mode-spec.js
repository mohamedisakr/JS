describe('A mode of such a list is an element that occurs at least as often as each of the other elements.', () => {
    //[3, 3, 5, 6, 6, 6, 9, 9]; //  [1, 10, 2, 3, 4, 7, 7, 7, 9, 9]
    it('case 1: mode @ the middle and should be 6', () => {
        let v = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
        let mode = getMode(v);
        expect(mode).toBe(6);
    });

    it('case 1: mode @ the middle and should be 6', () => {
        let v = [3, 3, 5, 6, 6, 6, 9, 9];
        let mode = getMode(v);
        expect(mode).toBe(6);
    });

    it('case 2: mode @ the end and should be 7', () => {
        let v = [1, 2, 3, 4, 7, 7, 7, 9, 9, 10];
        let mode = getMode(v);
        expect(mode).toBe(7);
    });

    it('case 3: mode @ the beginning and should be 7', () => {
        let v = [1, 2, 3, 4, 7, 7, 7, 9, 9, 10];
        let mode = getMode(v);
        expect(mode).toBe(7);
    });
});