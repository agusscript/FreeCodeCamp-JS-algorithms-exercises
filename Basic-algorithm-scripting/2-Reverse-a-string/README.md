# Reverse a string

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

# Tests

- reverseString("hello") should return a string.
- reverseString("hello") should return the string olleh.
- reverseString("Howdy") should return the string ydwoH.
- reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.


# Solution 

```
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  return reverseArray.join("");
}
```