module.exports = function doTest() {
    const assert = require('assert');
    const chalk = require('chalk');
    const { drop, dropRight, dropWhile, dropRightWhile } = require('../../src/array/drop');
    try {
        assert.deepEqual(drop([1, 2, 3]), [2, 3]);
        assert.deepEqual(dropRight([1, 2, 3]), [1, 2]);
        let users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': true },
            { 'user': 'pebbles', 'active': false }
        ];
        assert.deepEqual(dropWhile(users, function (o) { return !o.active; }), [{ user: 'fred', active: true }, { user: 'pebbles', active: false }]);
        assert.deepEqual(dropRightWhile(users, function (o) { return !o.active; }), [{ user: 'barney', active: false }, { user: 'fred', active: true }]);
        return chalk.green('通过');
    } catch (err) {
        return chalk.red('不通过', err);
    }
};