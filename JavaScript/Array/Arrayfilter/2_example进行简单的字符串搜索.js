
var strings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];

// var filtered = strings.filter(function (str) {
//   return str.includes("at");
// });

// ES6
const filtered = strings.filter(str => {
  return str.includes("at");
});

console.log(filtered); // ["Matt", "Cat"];

