let s = `05-counting-sort.js
06-negative-integers.js
07-last-even.js
08-largest-even.js
09-palindrome.js
10-power.js
13-Binary-Search.js
15-delete-element.js
15-insert-element.js
16-smallest-integer.js
17-first-largest-occurrence.js
18-last-smallest-occurrence.js
19-median-mean.js
20-min-max.js
21-first-3-terms.js
22-longest-word.js
23-onto-function.js
25-one-in-bit-string.js
26-binary-search.js
27-ternary-search.js
29-mode.js
30-all-mode.js
31-anagrams.js
32-closest-distance.js
33-first-term-equal-previous.js
34-greater-sum-previous-terms.js
35-first-less-previous.js
36-bubble-sort.js
Binary-Search.js
Bubble-Sort.js
closest-pair.js
fibonacci-Grimson.js
Greedy-Algorithms-Example.js
Insertion-Sort.js
Linear-Search.js
Maximum-Element.js
Naive-String-Matcher.js`

let lines = s.match(/^.*([\n\r]+|$)/gm);

let txt = ``;
for (let i = 0; i < lines.length; i++) {
    txt += `<script src="../11/${lines[i]}"></script>`;
}
document.write(txt);