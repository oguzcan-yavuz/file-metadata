const fs = require('fs');
const path = require('path');
const metadata = require('../metadata');

describe('Getting file sizes', () => {
    const tests = JSON.parse(fs.readFileSync(path.join(__dirname, 'tests.json')));

    it('they should match', async () => {
        for(const test of tests) {
            const testFile = test["file"];
            const size = await metadata(testFile);
            expect(size).toEqual(test["expectedResult"]);
        }
    })
});
