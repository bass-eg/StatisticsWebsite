export function filterAll(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some((key) =>
      obj[key].toString().toLowerCase().includes(searchKey)
    )
  );
}
export function filterByName(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() => obj.name.toLowerCase().includes(searchKey))
  );
}
export function filterByMonth(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() =>
      obj.month.toLowerCase().includes(searchKey.toLowerCase())
    )
  );
}
export function filterBySecurityCode(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() =>
      obj.securityCode
        .toString()
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    )
  );
}
export function filterByNin(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() =>
      obj.nin.toString().toLowerCase().includes(searchKey.toLowerCase())
    )
  );
}
export function filterBySecondNin(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() =>
      obj.secondViolator.toString().toLowerCase().includes(searchKey.toLowerCase())
    )
  );
}
export function filterByOrderStatus(arr, searchKey) {
  return arr.filter((obj) =>
    Object.keys(obj).some(() =>
      obj.orderStatus.toString().toLowerCase().includes(searchKey.toLowerCase())
    )
  );
}
// function trimString(s) {
//   var l = 0,
//     r = s.length - 1;
//   while (l < s.length && s[l] == " ") l++;
//   while (r > l && s[r] == " ") r -= 1;
//   return s.substring(l, r + 1);
// }

// function compareObjects(o1, o2) {
//   var k = "";
//   for (k in o1) if (o1[k] != o2[k]) return false;
//   for (k in o2) if (o1[k] != o2[k]) return false;
//   return true;
// }

// function itemExists(haystack, needle) {
//   for (var i = 0; i < haystack.length; i++)
//     if (compareObjects(haystack[i], needle)) return true;
//   return false;
// }

// function searchFor(objects, toSearch) {
//   var results = [];
//   toSearch = trimString(toSearch); // trim it
//   for (var i = 0; i < objects.length; i++) {
//     for (var key in objects[i]) {
//       if (objects[i][key].toString().indexOf(toSearch) != -1) {
//         if (!itemExists(results, objects[i])) results.push(objects[i]);
//       }
//     }
//   }
//   return results;
// }
