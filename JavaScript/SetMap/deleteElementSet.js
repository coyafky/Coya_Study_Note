const companies = new Set();
console.log(companies.size);
companies.add("Microsoft");
companies.add("Google");
companies.add("Amazson");
companies.add("Alibaba");
companies.add("Oracle");

console.log(companies.size);
console.log(companies);// // Set(5) { 'Microsoft', 'Google', 'Amazson', 'Alibaba', 'Oracle' }

console.log(companies.delete("Amazson"));
console.log(companies.size);

