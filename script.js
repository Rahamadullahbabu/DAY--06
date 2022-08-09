//1-- practice
//2-- practice

// 3- Write a “person” class to hold all the details.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	introduction() {
		return `My name is ${name} and I am ${age} years old!`;
	}
}

let john = new Person("John Smith", 18);
console.log(john.introduction());

//4--write a class to calculate the uber price

function counter(distance) {
    let totalCost = 0, dist = distance * 1000;
    for (let m = 1; m <= dist; m++) {
      if (m <= 100) totalCost += 100;
      else totalCost += (m <= 500) ? 50 : 10;
    }
    return totalCost;
  }
  
  console.log(1000*.001,counter(.001))
  console.log(1000*.01,counter(.01))
  console.log(1000*.1,counter(.1))
  console.log(1000*.2,counter(.2))
  console.log(1000*.5,counter(.5))
  console.log(1000,counter(1))
