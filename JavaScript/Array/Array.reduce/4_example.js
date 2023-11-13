let foods = [
    {name: 'steak', calories: 800, carbs: 10, fat: 30},
    {name: 'fruit', calories: 200, carbs: 20, fat: 0},
    {name: 'salad', calories: 100, carbs: 0, fat: 5},
    {name: 'chips', calories: 300, carbs: 10, fat: 10},
    {name: 'ice cream', calories: 700, carbs: 20, fat: 20},
  ];

  let total = foods.reduce(function (buckets, item) {
    let calories = item.calories;
    let carbs = item.carbs;
    let fat = item.fat;
   
    buckets['calories'] += calories;
    buckets['carbs'] += carbs;
    buckets['fat'] += fat;
   
    return buckets;
  },
  {calories: 0, carbs: 0, fat:0}
  );

  console.log(total);

  // { calories: 2100, carbs: 60, fat: 65 }