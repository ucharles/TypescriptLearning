class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const angela = new Human("angela", 111, "female");

// 물음표를 붙이면 선택적인 인수
const greeting = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(greeting(angela));

export {};
