let sum=(a,b)=>a+b;
console.log(sum(1,2));
let square =(sum)=>sum*sum;
console.log(square(10));
let sayhi=()=>console.log("hello");
sayhi();

let  age = prompt ("what is your age",18);
let  welcome =(age<18) ?
()=>console.log("hello"):
()=>console.log("greet");

welcome();
// wrong Uncaught ReferenceError ReferenceError: prompt is not defined

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// 实现上面的箭头函数

const  ask =(question,yes ,no)=>confirm(question) ? yes():no()
{
    "do you agree"
    =()=>alert("you are agree")
    =()=>alert("not")
}
function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(who) {
    alert('Hello, ' + who);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // 2 秒后显示：Hello, John