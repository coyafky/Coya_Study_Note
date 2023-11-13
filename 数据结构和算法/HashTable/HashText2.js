
	// HashTable Implementation 
	class HashTable { 
		constructor() { 
			this.table = new Array(10); 
			this.size = 0; 
		} 
	
		// private function to convert key to index 
		// _ shows that the function is private 
		_setKey(key) { 
			const lastDigit = key % 10; 
			return lastDigit; 
		} 
	
		// insert value in the hashtable 
		insert(value) { 
			const index = this._setKey(value); 
			this.table[index] = value; 
			this.size++; 
		} 
	
		get(key) { 
			const target = this._setKey(key); 
			return this.table[target]; 
		} 
	
		search(value) { 
			const index = this._setKey(value); 
			if (this.table[index] == value) 
				console.log("The contact number is found at index : ", index); 
			else
				console.log("Contact Number not found"); 
		} 
	
		delete(key) { 
			const index = this._setKey(key); 
	
			if (this.table[index]) { 
				this.table[index] = []; 
				this.size--; 
				return true; 
			} else { 
				return false; 
			} 
		} 
	} 
	
	const hashExample = new HashTable(); 
	// insert 
	hashExample.insert(98754525); 
	hashExample.insert(98747512); 
	hashExample.insert(94755523); 
	hashExample.insert(92752521); 
	hashExample.insert(98556529); 
	
	console.log(hashExample.table); 
	
	// search 
	hashExample.search(92752521); // found 
	hashExample.search(92755784); // not found 
	
	// delete 
	hashExample.delete(92752521); 
	
	// showing table after deletion 
	console.log(hashExample.table); 
	

