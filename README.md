# algorithms

This repo contains code from the Frontend Masters _The Last Algorithms Course You'll Need_ course.

## Notes

https://frontendmasters.com/courses/algorithms
https://theprimeagen.github.io/fem-algos/

### Big O Notation

Growth is with respect to the input
Constants are usually dropped
Worst case is usually what we measure

O(1) - Constant Time
O(logn) - Half it every time.
O(n) - Oh of N - Linear - Do one for every input
O(nlogn) - Oh of nlogn - Do once, then half
O(n^2) - Ohof N squared
O(2^n) -
O(n!) - Oh of n factorial

#### Note on Arrays

Arrays are contiguous spaces in memory.

#### Linear Search

```js
function search_linear(array, item) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}
```
