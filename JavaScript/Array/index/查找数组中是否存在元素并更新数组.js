function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
      veggies.push(veggie);
      console.log(`New veggies collection is: ${veggies}`);
    } else {
      console.log(`${veggie} already exists in the veggies collection.`);
    }
  }
  
  const veggies = ["potato", "tomato", "chillies", "green-pepper"];
  
  updateVegetablesCollection(veggies, "spinach");
  // New veggies collection is: potato,tomato,chillies,green-pepper,spinach
  updateVegetablesCollection(veggies, "spinach");
  // spinach already exists in the veggies collection.
  