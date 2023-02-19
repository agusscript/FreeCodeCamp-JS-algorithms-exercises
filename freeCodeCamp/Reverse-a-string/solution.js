function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  return reverseArray.join("");
}

reverseString("hello");