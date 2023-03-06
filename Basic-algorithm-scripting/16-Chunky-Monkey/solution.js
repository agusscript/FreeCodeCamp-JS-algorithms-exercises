function chunkArrayInGroups(arr, size) {
  let chunckedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunckedArray.push(arr.slice(i, i + size));
  }

  return chunckedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);