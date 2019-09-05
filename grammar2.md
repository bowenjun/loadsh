# lodash 冲一波(语法篇2-Object)

## _.assign(object, [sources])

将源对象的自己的可枚举字符串键控属性分配给目标对象。源对象从左到右应用。后续源覆盖以前源的属性分配

```js
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;
 
_.assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }
```

## _.at(object, [paths])

创建与对象路径对应的值数组

```js
let object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```

## _.create(prototype, [properties])

创建从原型对象继承的对象。如果给定属性对象，则将其自己的可枚举字符串键控属性分配给创建的对象

```js
function Shape() {
  this.x = 0;
  this.y = 0;
}
 
function Circle() {
  Shape.call(this);
}
 
Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});
 
var circle = new Circle;
circle instanceof Circle;
// => true
 
circle instanceof Shape;
// => true
```

## _.defaults(object, [sources])

为所有解析为未定义的目标属性将源对象的自身和继承的可枚举字符串键控属性分配给目标对象。源对象从左到右应用。一旦设置了属性，就会忽略相同属性的附加值

```js
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```

## _.findKey(object, [predicate=_.identity])

返回条件第一个元素谓词的键

```js
let users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'
```

## _.forIn(object, [iteratee=_.identity])

遍历对象的自身和继承的可枚举字符串键控属性，并为每个属性调用 `iteratee`。迭代器由三个参数调用:(值、键、对象)。 `Iteratee` 函数可以通过显式返回 `false` 提前退出迭代

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => 'a', 'b', then 'c' (iteration order is not guaranteed).
```

## _.forOwn(object, [iteratee=_.identity])

遍历对象的自身可枚举字符串键控属性，并为每个属性调用 `iteratee`。迭代器由三个参数调用:(值、键、对象)。 `Iteratee` 函数可以通过显式返回 `false` 提前退出迭代

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => 'a' then 'b' (iteration order is not guaranteed).
```

## _.functions(object)

从对象的可枚举属性中创建函数属性名数组

```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functions(new Foo);
// => ['a', 'b']
```

## _.functionsIn(object)

从对象的自身和继承的可枚举属性创建函数属性名称数组

```js
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}
 
Foo.prototype.c = _.constant('c');
 
_.functionsIn(new Foo);
// => ['a', 'b', 'c']
```

## _.get(object, path, [defaultValue])

获取对象路径处的值。如果解析值未定义，则返回 `defaultValue`

```js
let object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```

## _.has(object, path)

检查 `path` 是否为对象的直接属性

```js
let object = { 'a': { 'b': 2 } };
let other = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.has(object, 'a');
// => true
 
_.has(object, 'a.b');
// => true
 
_.has(object, ['a', 'b']);
// => true
 
_.has(other, 'a');
// => false
```

## _.hasIn(object, path)

检查path是对象的直接属性还是继承属性

```js
let object = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.hasIn(object, 'a');
// => true
 
_.hasIn(object, 'a.b');
// => true
 
_.hasIn(object, ['a', 'b']);
// => true
 
_.hasIn(object, 'b');
// => false
```

## _.invert(object)

创建由反向键和对象值组成的对象。如果对象包含重复的值，则后续值将覆盖先前值的属性赋值

```js
let object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }
```

## _.invoke(object, path, [args])

调用对象路径上的方法

```js
let object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```

## _.keys(object)

创建对象自身可枚举属性名的数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)
 
_.keys('hi');
// => ['0', '1']
```

## _.keysIn(object)

创建对象自身和继承的可枚举属性名的数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
```

## _.mapKeys(object, [iteratee=_.identity])

通过迭代器运行对象的每个可枚举字符串键控属性，生成与对象和键值相同的对象。迭代器由三个参数调用:(值、键、对象)

```js
_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```

## _.mapValues(object, [iteratee=_.identity])

使用与对象相同的键创建对象，并通过迭代器运行对象的每个可枚举字符串键控属性生成值。迭代器使用三个参数调用:
(值、键、对象)

```js
let users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

## _.merge(object, [sources])

这个方法类似于 `_.assign` 赋值，除非它递归地将源对象的自己的和继承的可枚举字符串键控属性合并到目标对象中。如果目标值存在，则跳过解析为未定义的源属性。数组和普通对象属性递归合并。赋值会覆盖其他对象和值类型。源对象从左到右应用。后续源覆盖以前源的属性分配

```js
let object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
let other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

## _.omit(object, [paths])

创建一个对象，该对象由不被省略的对象的自身和继承的可枚举属性路径组成

```js
let object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

## _.pick(object, [paths])

创建由所选对象属性组成的对象

```js
const object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

## _.result(object, path, [defaultValue])

这个方法类似于 `_.get` ，如果解析后的值是一个函数，则使用其父对象的这个绑定调用它，并返回它的结果

```js
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 
_.result(object, 'a[0].b.c1');
// => 3
 
_.result(object, 'a[0].b.c2');
// => 4
 
_.result(object, 'a[0].b.c3', 'default');
// => 'default'
 
_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'
```

## _.set(object, path, value)

设置对象路径的值。如果路径的一部分不存在，就创建它。数组是为丢失的索引属性创建的，而对象是为所有其他丢失的属性创建的

```js
let object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4
 
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```

## _.toPairs(object)

为对象创建自己的可枚举字符串 `keyed-value` 对数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```

## _.toPairsIn(object)

为对象创建自己的和继承的可枚举字符串 `keyed-value` 对数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
```

## _.transform(object, [iteratee=_.identity], [accumulator])

通过迭代器运行自己的每个可枚举字符串键控属性的结果，每次调用都可能使 `accumulator` 对象发生变化。如果不提供累加器，将使用具有相同 `[[Prototype]]` 的新对象。迭代器由四个参数调用:(累加器、值、键和对象)。`Iteratee` 函数可以通过显式返回 `false` 提前退出迭代

```js
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]
 
_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
```

## _.unset(object, path)

移除对象路径上的属性

```js
let object = { 'a': [{ 'b': { 'c': 7 } }] };
_.unset(object, 'a[0].b.c');
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
 
_.unset(object, ['a', '0', 'b', 'c']);
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
```

## _.update(object, path, updater)

这个方法类似于 `_.set` 除非接受 `updater` 来生成要设置的值

```js
let object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9
 
_.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0
```

## _.values(object)

创建对象的自身可枚举字符串键控属性值的数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)
 
_.values('hi');
// => ['h', 'i']
```

## _.valuesIn(object)

创建对象的自己的和继承的可枚举字符串键控属性值的数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.valuesIn(new Foo);
// => [1, 2, 3] (iteration order is not guaranteed)
```