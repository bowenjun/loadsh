# jsdoc 简要文档

## @example

描述: 提供一个如何使用描述项的例子。

Overview（概述）
提供一个如何使用描述项的例子。跟随此标签的文字将显示为高亮代码。

Examples（例子）
注意，一个doclet中可以同时使用多个@example标签。

```js
/**
 * Solves equations of the form a * x = b
 * @example &lt;caption>Example usage of method1.&lt;/caption>
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
 ```

## @export

描述: 标识一个由JavaScript模块导出的成员。

Syntax（语法）
@exports <moduleName>

在JSDoc3.3.0或更高版本中，<moduleName>可以包含module: 前缀。在以前的版本中，你必须忽略此前缀。

Overview（概述）
@exports标签描述由JavaScript模块的exports或module.exports属性导出的任何内容。

Examples（例子）
在模块中，当您使用特定的exports模块，@exports标签是不需要。JSDoc会自动识别出该对象的导出成员。同样，JSDoc会自动识别中的Node.js模块特定的module.exports属性。

```js
/**
 * A module that says hello!
 * @module hello/world
 */
```