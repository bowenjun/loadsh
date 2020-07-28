function compact(array) {
  let index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    let value = array[index];
    // 直接判断值是否为 假值
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

let res1 = compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

console.log(res1);