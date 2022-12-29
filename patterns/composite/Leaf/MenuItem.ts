import MenuComponent from "../Component/MenuComponent";

class MenuItem extends MenuComponent {
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
    super();
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

  print(): string[] {
    return [
      `  ${this.name}${this.isVegetarian() ? "(v)" : ""}, ${
        this.price
      }     -- ${this.description}`,
    ];
  }
}

export default MenuItem;
