function concat() {
  let length = arguments.length;
  if (!length) return [];

  let args = Array.from({ length: length - 1 }),
    array = arguments[0],
    index = length;

  // 组合除第一个参数以外的参数数组，并最终用 flat 方法拍平
  while (index--) {
    args[index - 1] = arguments[index];
  }

  // 使用 arrayPush 将第二个数组的元素添加到第一个数组上，这里用了一个浅复制
  return arrayPush(Array.isArray(array) ? [...array] : [array], args.flat(1));
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

module.exports = concat;