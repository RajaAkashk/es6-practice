const user = {
  name: "Akash",
  greet: function ()  {
    return `Hello, ${this.name}`;
  },
};

const greetFn = user.greet.bind(user);
console.log(greetFn());

function show() {
  console.log(this.value);
}

const obj = { value: 42, show };
obj.show();

function display() {
  console.log(this);
}
display();

const car = {
  brand: "Toyota",
  getBrand: () => {
    return this.brand;
  },
};

console.log(car.getBrand());

const laptop = {
  brand: "Dell",
  show: function () {
    setTimeout(() => {
      console.log("Brand:", this.brand);
    }, 1000);
  },
};

laptop.show();

const person = {
  name: "Ravi",
};

function greet() {
  return `Hi, ${this.name}`;
}

console.log(greet.call(person));

const product = {
  name: "Laptop",
};  

function showPrice(currency, price) {
  return `${this.name} costs ${currency}${price}`;
}

console.log(showPrice.apply(product, ["$", 1000]));

const dog = {
  name: "Buddy",
  speak: function () {
    return `${this.name} says Woof!`;
  },
};

const speakFn = dog.speak.bind(dog);
console.log(speakFn());

const bike = {
  brand: "Yamaha",
  showBrand: function () {
    setTimeout(
      function () {
        console.log("Brand:", this.brand);
      }.bind(this),
      1000
    );
  },
};

bike.showBrand();
