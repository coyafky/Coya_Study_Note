function add(num1, num2, callback){
	var sum = num1 + num2;
	if(typeof callback === 'function'){
		callback(sum);
	}
}