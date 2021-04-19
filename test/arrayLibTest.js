const assert = require('assert');
const arrayLib = require('../arrayLib');

const collection = [1, 2, 3, 4, 5];
const increase = (element) => element * 2;
const isOdd = (element) => (element % 2 === 1);

describe('array library take test', function() {
    it('should return first n elements of array', function() {
        let result = arrayLib.take(collection, 1);
        assert.equal(result, 1);
    });
    it('should return undefined if negative n', function() {
        let result = arrayLib.take(collection, -1);
        assert.equal(result, undefined);
    });
});

describe('array library skip test', function() {
    it('should return last n elements of array', function() {
        let result = arrayLib.skip(collection, 4);
        assert.equal(result, 5);
    });
    it('should return undefined if negative n', function() {
        let result = arrayLib.skip(collection, -1);
        assert.equal(result, undefined);
    });
});

describe('array library map test', function() {
    it('should return elements * 2 of array', function() {
        let result = arrayLib.map(collection, increase);
        assert.equal(JSON.stringify(result), JSON.stringify(collection));
    });
});

describe('array library filter test', function() {
    it('should return odd', function() {
        let filterCollection = [1, 2, 3 , 4, 5];
        let result = arrayLib.filter(filterCollection, isOdd);
        let expectedResult = [1, 3, 5];
        assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
    });
});

describe('array library chain test', function() {
    it('should return odd', function() {
        let chainCollection = [1, 2, 3 , 4, 5];
        let result = arrayLib.chain(chainCollection).map(increase).take(1).value();
        let expectedResult = 2;
        assert.equal(result, expectedResult);
    });
});