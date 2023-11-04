function getValue (condiction){
    if(condiction){
        let value ='value';
        return value;
    }
    else{
        // 
//ReferenceError: value is not defined
        console.log(value);
        return null;
    }
}

getValue(false)