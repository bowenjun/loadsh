module.exports = function doTest() {
    const assert = require('assert');
    const chalk = require('chalk');
    const _fill = require('../../src/array/fill');
    try {
        assert.deepEqual(_fill([4, 6, 8, 10], '*', 1, 3), [4, '*', '*', 10]);
        return chalk.green('通过');
    } catch (err) {
        return chalk.red('不通过', err);
    }
};