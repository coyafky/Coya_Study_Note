  
//注意在回调函数调用时this的执行上下文并不是回调函数定义时的那个上下文，而是调用它的函数所在的上下文。

// 可以使用apply来解决
var obj = {
	sum: 0,
	add: function(num1, num2){
		this.sum = num1 + num2;
	}
};

function add(num1, num2, callbackObj, callback){
	callback.apply(callbackObj, [ num1, num2 ]);
};

add(1,2, obj, obj.add);
console.log(obj.sum);			//=>3
