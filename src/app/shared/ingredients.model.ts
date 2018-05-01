export class Ingredients {
  // Below is the traditional approach.
  // public name: string;
  // public amount: number;

  // constructor(name: string, amount: number) {
  //   this.name = name;
  //   this.amount = amount;
  // }

  // This one is another approach in TypeScript. Here we dont need to define properties.
  // Here it will create properties by default with name, amount and constructor function will assign the 
  // passed values to properties.
  constructor(public name: string, public amount: number) {}

}