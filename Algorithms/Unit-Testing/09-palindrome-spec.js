describe('Determine whether a string of n characters is a palindrome.', () => {
    it('String should be palindrome', () => {
        let phrase = 'Mr Owl ate my metal worm';   //'anything'; // 'My gym';    //
        let isOk = isPalindrome_V3(phrase); //isPalindromeV2(phrase); //isPalindrome(phrase);       
        expect(isOk).toBe(true);
    });

    it('String should be palindrome', () => {
        let phrase = 'Mr Owl ate my metal worm';   //'anything'; // 'My gym';    //
        let isOk = isPalindrome_V2(phrase); //isPalindromeV2(phrase); //isPalindrome(phrase);       
        expect(isOk).toBe(true);
    });

    it('String should be palindrome', () => {
        let phrase = 'Mr Owl ate my metal worm';   //'anything'; // 'My gym';    //
        let isOk = isPalindrome(phrase); //isPalindromeV2(phrase); //isPalindrome(phrase);       
        expect(isOk).toBe(true);
    });
    
    it('String should be NOT palindrome', () => {
        let phrase = 'hello';   //'anything'; // 'My gym';    //
        let isOk = isPalindrome_V3(phrase); //isPalindromeV2(phrase); //isPalindrome(phrase);       
        expect(isOk).toBe(false);
    });
});