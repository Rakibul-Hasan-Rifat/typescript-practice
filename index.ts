function formatString(input: string, toUpper: boolean = true): string {
  if (!toUpper) return input.toLowerCase();
  return input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length < 1) return null;

  let expensiveItem: Product = products[0];

  products.forEach((product) => {
    if (product.price > expensiveItem.price) expensiveItem = product;
  });

  return expensiveItem ? expensiveItem : null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === 5 || day === 6) return "Weekend";
  return "Weekday";
}

async function squareAsync(n: number): Promise<number | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) return reject("Negative number not allowed!");
      return resolve(n * n);
    }, 1000);
  });
}