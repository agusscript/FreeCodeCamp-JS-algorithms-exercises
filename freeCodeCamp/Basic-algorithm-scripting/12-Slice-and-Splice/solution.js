function frankenSplice(arr1, arr2, n) {
  let copyArr1 = arr1.slice(0);
  copyArr1.reverse();
  let copyArr2 = arr2.slice(0);

  for (let i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n, 0, copyArr1[i]);
  }

  return copyArr2;
}

frankenSplice([1, 2, 3], [4, 5], 1);
