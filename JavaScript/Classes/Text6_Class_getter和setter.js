class MyClass {
    constructor() {
      this._myProperty = 0; // Private property
    }
  
    get myProperty() {
      return this._myProperty; // Getter method
    }
  
    set myProperty(value) {
      if (value >= 0) {
        this._myProperty = value; // Setter method
      }
    }
  }
  
  const instance = new MyClass();
  instance.myProperty = 42; // Calls the setter method
  console.log(instance.myProperty); // Calls the getter method
  