# lodash 冲一波(语法篇1-Array)

## _.chunk(array, [size=1])

创建一个元素数组，这些元素按大小的长度分成组。如果数组不能被平均分割，最后的块将是剩余的元素

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

## _.compact(array)

创建一个删除所有 `falsey` 值的数组。值 `false`、`null`、`0`、`""`、`undefined` 和 `NaN`是 `falsey`

```js
_.compact([0, 1, false, 2, '', NaN, null, 3]);
// => 新数组 [1, 2, 3]
```

## _.concat(array, [values])

创建一个新数组，该数组与任何其他数组或值连接在一起

```js
_.concat([1], 2, [3], [[4]]);
// => [1, 2, 3, [4]]
```

## _.difference(array, [values])

创建不包含在其他给定数组中的数组值的数组，结果值的顺序和引用由第一个数组决定

```js
_.difference([1, 2, 3], [2, 4], [3, 5]);
// => [1]
```

## _.drop(array, [n=1])

创建一个数组切片，从开始删除n个元素

```js
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

## _.fill(array, value, [start=0], [end=array.length])

用值从 `start` 到 `end` (但不包括 `end` )填充数组元素

```js
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

## _.flattenDepth(array, [depth=1])

递归地平化数组直到深度

```js
let array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```

## _.fromPairs(pairs)

此方法返回由键值对组成的对象

```js
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```

## _.indexOf(array, value, [fromIndex=0])

获取数组中第一次出现值的索引，如果fromIndex是负数，则它用作数组末尾的偏移量

```js
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

## _.initial(array)

获取数组中除最后一个元素外的所有元素

```js
_.initial([1, 2, 3]);
// => [1, 2]
```

## _.intersection([arrays])

获取数组中的公有元素

```js
_.intersection([2, 1], [2, 3]);
// => [2]
```

## _.join(array, [separator=','])

将数组中的所有元素转换为由分隔符分隔的字符串

```js
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

## _.last(array)

获取数组的最后一个元素

```js
_.last([1, 2, 3]);
// => 3
```

## _.nth(array, [n=0])

获取数组下标n处的元素。如果n是负数，则返回末尾的第n个元素

```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```

## _.pull(array, [values])

从数组中删除所有给定值

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
// => ['b', 'b']
```

## _.remove(array, [predicate=_.identity])

从数组中删除方法返回 `true` 的元素，返回值为删除的元素列表

```js
let array = [1, 2, 3, 4];
let evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```

## _.reverse(array)

反转数组

```js
let array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
```

## _.slice(array, [start=0], [end=array.length])

slice

## _.tail(array)

获取数组中除第一个元素外的所有元素

```js
_.tail([1, 2, 3]);
// => [2, 3]
```

## _.take(array, [n=1])

获取数组从第一个元素开始的 `n` 个元素

```js
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```

## _.union([arrays])

数组合并去重

```js
_.union([2], [1, 2]);
// => [2, 1]
```

## _.uniq(array)

数组去重

```js
_.uniq([2, 1, 2]);
// => [2, 1]
```

## _.zip([arrays])

创建一个分组元素数组，其中第一个数组包含给定数组的第一个元素，第二个数组包含给定数组的第二个元素，依此类推

```js
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```

## _.unzip(array)

接受一个分组元素数组，并创建一个数组，将元素重新分组到它们的预 `zip` 配置中

```js
let zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
 
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
```

## _.without(array, [values])

排除所有给定值

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```

## _.xor([arrays])

创建一个惟一值数组，该值是给定数组的对称差异

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```