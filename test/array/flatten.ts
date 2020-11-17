module.exports = function doTest() {
    const assert = require('assert');
    const chalk = require('chalk');
    const _flatten = require('../../src/array/flatten');
    try {
        assert.deepEqual(_flatten([1, [2], [3, [4]]], 1), [1, 2, 3, [4]]);
        return chalk.green('通过');
    } catch (err) {
        return chalk.red('不通过', err);
    }
};