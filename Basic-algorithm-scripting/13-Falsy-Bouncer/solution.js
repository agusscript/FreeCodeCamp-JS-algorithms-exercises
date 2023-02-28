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

bouncer([7, "ate", "", false, 9]);
