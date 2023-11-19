const email = "test@example.com";

// 验证电子邮件地址是否有效
const isValidEmail = email.every((char) => char === "@");

// 输出 false
console.log(isValidEmail);