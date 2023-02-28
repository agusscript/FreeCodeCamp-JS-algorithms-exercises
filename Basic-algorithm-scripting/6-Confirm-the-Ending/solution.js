function confirmEnding(str, target) {
  let lastLength = str.substring(str.length - target.length);

  if (lastLength == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
