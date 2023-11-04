function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // 如果是基本类型或null，直接返回
    }

    if (Array.isArray(obj)) {
        // 如果是数组，使用map递归深拷贝数组中的每个元素
        return obj.map(item => deepClone(item));
    }

    // 如果是对象，使用递归深拷贝对象的每个属性
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

const originalObject = {
    key: 'value',
    nested: {
        nestedKey: 'nestedValue'
    }
};

const deepCopy = deepClone(originalObject);

// 修改深拷贝后的对象，原对象不受影响
deepCopy.nested.nestedKey = 'modifiedNestedValue';
console.log(originalObject.nested.nestedKey); // 输出: 'nestedValue'
console.log(deepCopy.nested.nestedKey);       // 输出: 'modifiedNestedValue'