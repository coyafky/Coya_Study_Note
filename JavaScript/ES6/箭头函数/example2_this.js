function getName (){
    console.log(this.name);
}

let getName2 =()=>{
    console.log(this.name);
}

window.name = "window";

const school ={
    name:"school",
}


getName();



getName2();