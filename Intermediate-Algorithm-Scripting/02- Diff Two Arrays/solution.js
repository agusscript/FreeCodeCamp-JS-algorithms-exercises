function diffArray(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);

  let newArr = mergedArray.filter(function (item) {
    return !arr1.includes(item) || !arr2.includes(item);
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
