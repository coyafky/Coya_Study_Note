let foods = [
    {name: 'steak', calories: 800},
    {name: 'fruit', calories: 200},
    {name: 'salad', calories: 100},
    {name: 'chips', calories: 300},
    {name: 'ice cream', calories: 700},
  ]; 
    
  let total = foods.reduce(function(sum, item){ 
    return sum + item.calories; 
  }, 0)
  //value of total will be 2100 

  console.log(total);