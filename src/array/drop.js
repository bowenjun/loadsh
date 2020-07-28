const _ = require('../source');

function drop(array, n = 1) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return array.slice(n < 0 ? 0 : n, length);
}

let res1 = drop([1, 2, 3]);
// => [2, 3]

function dropRight(array, n = 1) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = length - n;
  return array.slice(0, n < 0 ? 0 : n);
}

let res2 = dropRight([1, 2, 3]);
// => [1, 2]

function dropWhile(array, predicate) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return baseWhile(array, _.iteratee(predicate), false);
}

function dropRightWhile(array, predicate) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return baseWhile(array, _.iteratee(predicate), true);
}

function baseWhile(array, predicate, fromRight) {
  let length = array.length,
    index = -1;

  if (fromRight) {
    index = length;
    while (index-- && predicate(array[index], index, array)) { }
    return array.slice(0, index + 1);
  }

  while ((++index < length) && predicate(array[index], index, array)) { }
  return array.slice(index, length);
}

let users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': true },
  { 'user': 'pebbles', 'active': false }
];

let res3 = dropWhile(users, function (o) { return !o.active; });
// => [ { user: 'fred', active: true }, { user: 'pebbles', active: false } ]

let res4 = dropRightWhile(users, function (o) { return !o.active; });
// => [ { user: 'barney', active: false }, { user: 'fred', active: true } ]

console.log(res1, res2, res3, res4)