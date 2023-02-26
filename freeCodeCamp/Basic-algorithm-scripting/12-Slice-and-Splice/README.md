# Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

# Tests

- frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
- frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
- frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
- All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
- The first array should remain the same after the function runs.
- The second array should remain the same after the function runs.

# Solution

```
function frankenSplice(arr1, arr2, n) {
  let copyArr1 = arr1.slice(0);
  copyArr1.reverse();
  let copyArr2 = arr2.slice(0);

  for (let i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n, 0, copyArr1[i]);
  }

  return copyArr2;
}
```