function fill(array, value, start = 0, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  // start 为负数的情况，通过 start + length 来取到计算用的 start
  if (start < 0) {
    start = -start > length ? 0 : (start + length);
  }

  // 取到计算用到的 end
  end = (end === undefined || end > length) ? length : end;

  // end 如果是负数也用 end + length 来取值
  if (end < 0) {
    end += length;
  }

  // 将 start - end 区间内的数据替换为 value
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

module.exports = fill;