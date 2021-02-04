let arrayLib = {
    chain(collection) {
        this.chainCollection = collection;
        let clone = Object.assign({}, this);

        this.take = function (n) {
            this.chainCollection = clone.take(this.chainCollection, n);

            return this;
        };

        this.skip = function (n) {
            this.chainCollection = clone.skip(this.chainCollection, n);

            return this;
        };

        this.map = function (callback) {
            this.chainCollection = clone.map(this.chainCollection, callback);

            return this;
        };

        this.filter = function (callback) {
            this.chainCollection = clone.filter(this.chainCollection, callback);

            return this;
        };

        return this;
    },

    value() {
        return this.chainCollection;
    },

    take(collection, n) {
        let takenCollection = [];
        for (let i = 0; i < n; i++) {
            takenCollection[i] = collection[i];
        }

        return takenCollection;
    },

    skip(collection, n) {
        let skippedCollection = [];
        collectionEnd = collection.length - 1;

        for (let i = n; i <= collectionEnd; i++) {
            skippedCollection.push(collection[i]);
        }

        return skippedCollection;
    },

    map(collection, callback) {
        let collectionEnd = collection.length - 1;

        for (let i = 0; i <= collectionEnd; i++) {
            collection[i] = callback(collection[i]);
        }

        return collection;
    },

    filter(collection, callback) {
        let collectionEnd = collection.length - 1;
        let filteredCollection = [];
        let isFilteredValue;

        for (let i = 0; i <= collectionEnd; i++) {
            isFilteredValue = callback(collection[i]);

            if (isFilteredValue) {
                filteredCollection.push(collection[i]);
            }
        }

        return filteredCollection;
    }
}

console.log(arrayLib.chain([1, 2, 3, 4]).take(2).skip(1).value());