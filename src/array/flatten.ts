function flatten(array, depth, result = []) {
  let index = -1,
    length = array.length;

  while (++index < length) {
    let value = array[index];
    if (depth > 0 && Array.isArray(value)) {
      if (depth > 1) {
        // 递归
        flatten(value, depth - 1, result);
      } else {
        // 连接数组
        arrayPush(result, value);
      }
    } else {
      // 赋值
      result[result.length] = value;
    }
  }
  return result;
}

function arrayPush(array, values) {
  let index = -1,
    length = values.length,
    offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = flatten;