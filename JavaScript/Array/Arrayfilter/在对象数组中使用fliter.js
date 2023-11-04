var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
];

var aquaticCreatures =  creatures.filter(function(creature) {
    return creature.habitat == "Ocean";
  });
  
  console.log(aquaticCreatures);

//   [
//     { name: 'Shark', habitat: 'Ocean' },
//     { name: 'Whale', habitat: 'Ocean' }
//   ]