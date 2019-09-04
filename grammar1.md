# lodash 冲一波(语法篇1-Array)

## _.chunk(array, [size=1])

创建一个元素数组，这些元素按大小的长度分成组。如果数组不能被平均分割，最后的块将是剩余的元素。

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

## _.compact(array)

创建一个删除所有 `falsey` 值的数组。值 `false`、`null`、`0`、`""`、`undefined` 和 `NaN`是 `falsey`。

```js
_.compact([0, 1, false, 2, '', NaN, null, 3]);
// => [1, 2, 3]
```

## _.concat(array, [values])

创建一个新数组，该数组与任何其他数组或值连接在一起。

```js
_.concat([1], 2, [3], [[4]]);
// => [1, 2, 3, [4]]
```

## _.difference(array, [values])

创建不包含在其他给定数组中的数组值的数组，结果值的顺序和引用由第一个数组决定。

```js
_.difference([1, 2, 3], [2, 4], [3, 5]);
// => [1]
```