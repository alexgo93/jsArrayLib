let arrayLib = {
    chain(collection) {
        this.chainCollection = collection;
        let self = this;

        let libCopy = {
            take(n) {
                arrayLib.chainCollection = self.take(arrayLib.chainCollection, n);

                return this;
            },

            value() {
                return arrayLib.chainCollection;
            },

            skip(n) {
                arrayLib.chainCollection = self.skip(arrayLib.chainCollection, n);

                return this;
            },

            map(callback) {
                arrayLib.chainCollection = self.map(arrayLib.chainCollection, callback);

                return this;
            },

            filter(callback) {
                arrayLib.chainCollection = self.filter(arrayLib.chainCollection, callback);

                return this;
            },
        };


        return libCopy;
    },


    take(collection, n) {
        if (n <= 0) {
            return undefined;
        }

        let takenCollection = [];
        for (let i = 0; i < n; i++) {
            takenCollection[i] = collection[i];
        }

        return takenCollection;
    },

    skip(collection, n) {
        if (n <= 0) {
            return undefined;
        }

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
};

module.exports = arrayLib;