const companies = new Set();
console.log(companies.size);//0
companies.add("Microsoft");
companies.add("Google");
companies.add("Amazson");
companies.add("Alibaba");
companies.add("Oracle");

companies.clear();// 它从集合中删除所有元素
console.log(companies.size);//0