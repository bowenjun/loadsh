const tests = {
    array: ['chunk', 'compact', 'concat', 'drop', 'fill', 'flatten']
}

async function run() {
    for (let folder of Object.keys(tests)) {
        for (let file of tests[folder]) {
            const t = require(`./${folder}/${file}`);
            const testResult = await t();
            console.log(`${folder}/${file} 结果: ${testResult}`);
        }
    }
}

run();