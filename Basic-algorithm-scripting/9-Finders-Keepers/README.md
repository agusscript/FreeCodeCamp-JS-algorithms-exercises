# Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

# Tests

- findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
- findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.


# Solution 

```
function findElement(arr, func) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    if (func(result)) {
      return result;
    }
  }
  return undefined;
}
```