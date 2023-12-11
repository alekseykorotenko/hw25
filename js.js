class Person {
  constructor(name, sex) {
    (this.name = name), (this.sex = sex);
  }
}

class Apartment {
  residentArr = [];
  addResident(resident) {
    this.residentArr.push(resident);
  }
}

class House {
  constructor(maxNum) {
    this.apartmentArr = [];
    this.maxNum = maxNum;
  }

  //   setApartment(apartment) {
  //     this.apartment = apartment;
  //     console.log(this.apartment);
  //   }

  addApartment(apartment) {
    if (this.apartmentArr.length < this.maxNum) {
      this.apartmentArr.push(apartment);
    } else {
      console.log(`Кіл-ть квартир більше можливого`);
    }
  }
}

const person1 = new Person('Olseksii', 'm');
const person2 = new Person('Daniil', 'm');
const person3 = new Person('Serge', 'm');

const apart1 = new Apartment();
const apart2 = new Apartment();
const apart3 = new Apartment();

apart1.addResident(person1);
apart2.addResident(person2);
apart3.addResident(person3);

const house = new House(2);

house.addApartment(apart1);
house.addApartment(apart2);
house.addApartment(apart3);

console.log(house);
