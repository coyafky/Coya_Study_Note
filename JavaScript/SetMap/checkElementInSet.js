const companies = new Set();
console.log(companies.size);
companies.add("Microsoft");
companies.add("Google");
companies.add("Amazson");
companies.add("Alibaba");
companies.add("Oracle");


console.log(companies.has("Microsoft"));// true
console.log(companies.has("Facebook"));// false

