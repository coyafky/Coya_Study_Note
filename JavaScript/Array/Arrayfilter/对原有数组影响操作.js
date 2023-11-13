// 修改每个单词
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// 注意，在长度为 6 以下有三个单词，但是由于它们已经被修改，所以返回一个单词
// ["spray"]

// 添加新单词
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// 只有三个符合条件，即使 `words` 本身现在有更多字符长度小于 6 的单词
// ["spray" ,"limit" ,"elite"]

// 删除单词
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// 注意我们没有得到 'elite'，因为它在过滤器访问到它之前就已经从 'words' 弹出了
// ["spray" ,"limit"]
