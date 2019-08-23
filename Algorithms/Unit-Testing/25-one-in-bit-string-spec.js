describe('Count the number of 1s in a bit string.', () => {
    it('The number of 1s should equal 0.', () => {
        let bitstr = '';    //'11111101';//'11101010';
        let count = countOnes(bitstr);
        expect(count).toBe(0);
    });

    it('The number of 1s should equal 4.', () => {
        let bitstr = '1111';    //'11111101';//'11101010';
        let count = countOnes(bitstr);
        expect(count).toBe(4);
    });

    it('The number of 1s should equal 0.', () => {
        let bitstr = '0000';    //'11111101';//'11101010';
        let count = countOnes(bitstr);
        expect(count).toBe(0);
    });

    it('The number of 1s should equal 2.', () => {
        let bitstr = '1010';    //'11111101';//'11101010';
        let count = countOnes(bitstr);
        expect(count).toBe(2);
    });
});