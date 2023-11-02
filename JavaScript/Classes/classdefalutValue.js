class Person {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person() // it will take the default values
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1)
  console.log(person2)