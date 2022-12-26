import CustomIterator from "../IteratorInterface/CustomIterator";

import Menu from "../AggregateInterface/Menu";
import MenuItem from "../MenuItem";

class PancakeHouseMenu implements Menu {
  #menuItems: Set<MenuItem>;

  constructor() {
    this.#menuItems = new Set<MenuItem>();

    this.addItem(
      "K&B's Pancake Breakfast",
      "Pancakes with scrambled eggs, and toast",
      true,
      2.99
    );

    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    );

    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries, and blueberry syrup",
      true,
      3.49
    );

    this.addItem(
      "Waffles",
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
    return null;
  }
}

export default PancakeHouseMenu;
