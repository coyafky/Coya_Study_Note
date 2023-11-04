class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    }
}

var numbers = [1, 2, 3, 4, 5];
var iterator = new Iterator(numbers);

while (iterator.hasNext()) {
    console.log(iterator.next());
}

// 1,2,3,4,5
