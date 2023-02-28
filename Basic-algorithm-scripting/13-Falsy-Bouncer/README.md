# Falsy Bouncer

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

# Tests

- bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
- bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
- bouncer([false, null, 0, NaN, undefined, ""]) should return [].
- bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
- You should not mutate arr.

# Solution

```
function bouncer(arr) {
  let copyArr = arr.slice();

  let fil = arr.filter(function (item) {
    if (item === false) {
      copyArr.splice(item, 1);
    }
    return item;
  });

  return fil;
}
```