const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

vegetables.push(...moreVegs); // [ 'parsnip', 'potato', 'celery', 'beetroot' ]

console.log(vegetables);