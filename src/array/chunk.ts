function chunk(array, size) {
  // 获取数组长度
  let length = array == null ? 0 : array.length;

  // 空数组或者 size < 1 直接返回 []
  if (!length || size < 1) return [];

  // 定义变量
  let result = Array.from({ length: Math.ceil(length / size) }),
    arrayIndex = 0,
    resIndex = 0;

  // 使用 slice 裁剪数组片段
  while (arrayIndex < length) {
    result[resIndex++] = array.slice(arrayIndex, arrayIndex += size);
  }
  return result;
}

module.exports = chunk;
