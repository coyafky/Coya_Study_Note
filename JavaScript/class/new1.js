function people(name){
    this.name=name;
}

people.prototype.introduce=function(){
    console.log("My name is "+this.name);
}

let ada = new people("Ada");

console.log(ada.name);
ada.introduce();

