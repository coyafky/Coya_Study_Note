// 原始对象
let sourceObject = {
    prop1: 'value1',
    prop2: {
        nestedProp: 'nestedValue'
    }
};

// 使用Object.assign()进行拷贝
let targetObject = Object.assign({}, sourceObject);

// 修改嵌套对象的属性
targetObject.prop2.nestedProp = 'modifiedValue';

// 输出原始对象的嵌套属性
console.log(sourceObject.prop2.nestedProp); // 输出 'modifiedValue'，因为是浅拷贝，修改反映在源对象上
