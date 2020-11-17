module.exports = function doTest() {
    const assert = require('assert');
    const chalk = require('chalk');
    const _compact = require('../../src/array/compact');
    try {
        assert.deepEqual(_compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
        return chalk.green('通过');
    } catch (err) {
        return chalk.red('不通过', err);
    }
};