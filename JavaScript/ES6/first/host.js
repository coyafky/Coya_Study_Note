function  getValue (condiction){
    if(condiction){
        var value = 'value';
        return value;

    }   else{
        // 这里可以访问到value 只不过值是undefined
        console.log(value);
        return null;
    } 
}

getValue(false);// undefined


