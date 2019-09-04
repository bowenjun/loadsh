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