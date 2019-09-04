; (function () {

    const argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        asyncTag = '[object AsyncFunction]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        domExcTag = '[object DOMException]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        nullTag = '[object Null]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        proxyTag = '[object Proxy]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        undefinedTag = '[object Undefined]',
        weakMapTag = '[object WeakMap]',
        weakSetTag = '[object WeakSet]';

    const arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';

    const arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;


    /**
     * 调用 `Object.prototype.toString` 将 `value` 转换为 string .
     */
    function objectToString(value) {
        return objectProto.toString.call(value);
    }

    /**
     * _.isObjectLike(value)
     * 判断参数是否是复杂数据类型
     * 
     * _.isObjectLike({});
     * // => true
     * _.isObjectLike([1, 2, 3]);
     * // => true
     * _.isObjectLike(_.noop);
     * // => false
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }

    /**
     * getTag
     */
    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }
        return objectToString(value);
    }

    /**
     * _isNumber(value)
     * 判断参数是否是 number 类型
     * 
     * _.isNumber(3);
     * // => true
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     * _.isNumber(Infinity);
     * // => true
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
        return typeof value == 'number' || (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * _.isNaN(value)
     * 判断参数是否是 NaN
     * 
     * _.isNaN(NaN);
     * // => true
     * _.isNaN(new Number(NaN));
     * // => true
     * isNaN(undefined);
     * // => true
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
        return isNumber(value) && value != +value
    }

    /**
     * _.chunk(array, [size=1])
     * 将数组按照 size 分割
     * 
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size = 1) { }
}.call(this));