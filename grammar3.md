# lodash 冲一波(语法篇3-Number)

## _.clamp(number, [lower], upper)

获取在上下界内的数

```js
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```

## _.inRange(number, [start=0], end)

检查 `n` 是否在 `start` 到 `end` 之间，但不包括 `end`。如果开始大于结束，则交换参数以支持负范围。

```js
_.inRange(3, 2, 4);
// => true
 
_.inRange(4, 8);
// => true
 
_.inRange(4, 2);
// => false
 
_.inRange(2, 2);
// => false
 
_.inRange(1.2, 2);
// => true
 
_.inRange(5.2, 4);
// => false
 
_.inRange(-3, -2, -6);
// => true
```

## _.random([lower=0], [upper=1], [floating])

在包含下界和上界之间产生一个随机数

```js
_.random(0, 5);
// => an integer between 0 and 5
 
_.random(5);
// => also an integer between 0 and 5
 
_.random(5, true);
// => a floating-point number between 0 and 5
 
_.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```