function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  let filteredObj = collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });

  return filteredObj;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
