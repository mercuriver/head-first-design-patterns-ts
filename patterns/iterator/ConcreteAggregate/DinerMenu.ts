import CustomIterator from "../IteratorInterface/CustomIterator";

import Menu from "../AggregateInterface/Menu";
import MenuItem from "../MenuItem";

import { DinerMenuIterator } from "../ConcreteIterator";

import { dinerMenuName } from "../index.meta";

const MAX_ITEMS = 6;

class DinerMenu implements Menu {
  static final: number;
  #numberOfItems: number;
  #menuItems: MenuItem[];

  constructor() {
    this.#menuItems = [];
    this.#numberOfItems = 0;

    this.addItem(
      dinerMenuName.VEGETARIAN_BLT,
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );
    this.addItem(
      dinerMenuName.BLT,
      "Bacon with lettuce & tomato on whole wheat",
      false,
      2.99
    );
    this.addItem(
      dinerMenuName.SOUP_OF_THE_DAY,
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    );
    this.addItem(
      dinerMenuName.HOTDOG,
      "A hot dog, with sauerkraut, relish, onions, topped with cheese",
      false,
      3.05
    );
    this.addItem(
      dinerMenuName.STEAMED_VEGGIES_AND_BROWN_RICE,
      "A medly of steamed vegetables over brown rice",
      true,
      3.99
    );
    this.addItem(
      dinerMenuName.PASTA,
      "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
      true,
      3.89
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);

    if (this.#numberOfItems >= MAX_ITEMS) {
      console.log("Sorry, menu is full!  Can't add item to menu");
    } else {
      this.#menuItems[this.#numberOfItems] = menuItem;
      this.#numberOfItems = this.#numberOfItems + 1;
    }
  }

  get menuItems(): MenuItem[] {
    return this.#menuItems;
  }

  createIterator(): CustomIterator {
    return new DinerMenuIterator(this.#menuItems);
  }
}

export default DinerMenu;
