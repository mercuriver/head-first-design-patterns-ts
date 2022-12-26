import CustomIterator from "../IteratorInterface/CustomIterator";

import Menu from "../AggregateInterface/Menu";
import MenuItem from "../MenuItem";

import { PancakeHouseMenuIterator } from "../ConcreteIterator";

import { pancakeHouseMenuName } from "../index.meta";

class PancakeHouseMenu implements Menu {
  #menuItems: Set<MenuItem>;

  constructor() {
    this.#menuItems = new Set<MenuItem>();

    this.addItem(
      pancakeHouseMenuName.KBS_PANCAKE_BREAKFAST,
      "Pancakes with scrambled eggs, and toast",
      true,
      2.99
    );

    this.addItem(
      pancakeHouseMenuName.REGULAR_PANCAKE_BREAKFAST,
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    );

    this.addItem(
      pancakeHouseMenuName.BLUEBERRY_PANCAKES,
      "Pancakes made with fresh blueberries, and blueberry syrup",
      true,
      3.49
    );

    this.addItem(
      pancakeHouseMenuName.WAFFLES,
      "Waffles, with your choice of blueberries or strawberries",
      true,
      3.59
    );
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.#menuItems.add(menuItem);
  }

  get menuItems(): Set<MenuItem> {
    return this.#menuItems;
  }

  createIterator(): CustomIterator {
    return new PancakeHouseMenuIterator(this.#menuItems);
  }
}

export default PancakeHouseMenu;
