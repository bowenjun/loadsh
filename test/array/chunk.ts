module.exports = function doTest() {
    const assert = require('assert');
    const chalk = require('chalk');
    const _chunk = require('../../src/array/chunk');
    try {
        assert.deepEqual(_chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
        assert.deepEqual(_chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
        return chalk.green('通过');
    } catch (err) {
        return chalk.red('不通过', err);
    }
};