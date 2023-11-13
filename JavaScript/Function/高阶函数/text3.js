const arr = [16, 18, 20, 22, 24];
const adultArr = arr.filter(function(item) {
  return item >= 18;
});
console.log(adultArr); // 输出 [18, 20, 22, 24]
