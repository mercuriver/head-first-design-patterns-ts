class MenuItem {
  #name: string;
  #description: string;
  #vegetarian: boolean;
  #price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.#name = name;
    this.#description = description;
    this.#vegetarian = vegetarian;
    this.#price = price;
  }

  get name(): string {
    return this.#name;
  }

  get description(): string {
    return this.#description;
  }

  get price(): number {
    return this.#price;
  }

  isVegetarian(): boolean {
    return this.#vegetarian;
  }

  toString(): string {
    return this.#name + ", $" + this.#price + "\n   " + this.#description;
  }
}

export default MenuItem;
