// 函数：isValid，用于判断字符串s是否是有效的括号
 // 定义一个栈stack
 // 定义一个映射mapping，用于存储括号
 // 遍历字符串s
 // 如果当前字符在映射mapping中，则判断栈stack中是否有对应的括号，如果没有，则返回false，否则将栈stack中对应括号弹出
 // 否则，将当前字符压入栈stack中
 // 最后，判断栈stack是否为空，如果为空，则返回true，否则返回false
function isValid(s) {
    const stack = [];
    const mapping = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
   for (let i = 0; i < s.length; i++) {
      const char = s[i];
      // 检查字符是否在映射中
      if (char in mapping) {
        // 检查栈是否为空或者栈顶元素是否与映射中的值相等
        if (!stack.length || stack[stack.length - 1] !== mapping[char]) {
          return false;
        }
        // 弹出栈顶元素
        stack.pop();
      } else {
        // 将字符压入栈中
        stack.push(char);
      }
    }
    // 在遍历完字符串后，我们需要检查栈是否为空。如果栈为空，说明所有的括号都匹配，返回 true；否则，返回 false。这就是为什么我们需要在最后添加 return stack.length === 0; 这一行代码的原因。
    return stack.length === 0;
  }

  let s = '()[]{}';
  let s1 ='{]'
  console.log(isValid(s1)); // false
  console.log(isValid(s)); //true