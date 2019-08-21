describe('Compute x^n.', () => {
    it('Result should be 0.0625', () => {
        let a = 2;
        let b = -4; //0; //4; // 
        let res = compute(a, b);
        expect(res).toBe(0.0625);
    });

    it('Result should be 16', () => {
        let a = 2;
        let b = 4; //0; //4; // 
        let res = compute(a, b);
        expect(res).toBe(16);
    });

    it('Result should be 1', () => {
        let a = 200;
        let b = 0; //0; //4; // 
        let res = compute(a, b);
        expect(res).toBe(1);
    });
});