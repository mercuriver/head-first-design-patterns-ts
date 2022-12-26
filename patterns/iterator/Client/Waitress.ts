import Menu from "../AggregateInterface/Menu";
import CustomIterator from "../IteratorInterface/CustomIterator";

class Waitress {
  #pancakeHouseMenu: Menu;
  #dinerMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
    this.#pancakeHouseMenu = pancakeHouseMenu;
    this.#dinerMenu = dinerMenu;
  }

  get menu(): string[] {
    return [
      ...this.#parseMenu(this.#pancakeHouseMenu.createIterator()),
      ...this.#parseMenu(this.#dinerMenu.createIterator()),
    ];
  }

  #parseMenu(iterator: CustomIterator): string[] {
    const menu = [];
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      menu.push(menuItem.name);
    }
    return menu;
  }

  get vegetarianMenu(): string[] {
    return [
      ...this.#parseVegetarianMenu(this.#pancakeHouseMenu.createIterator()),
      ...this.#parseVegetarianMenu(this.#dinerMenu.createIterator()),
    ];
  }

  #parseVegetarianMenu(iterator: CustomIterator): string[] {
    const menu = [];
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      if (menuItem.isVegetarian()) {
        menu.push(menuItem.name);
      }
    }
    return menu;
  }

  isItemVegetarian(name: string): boolean {
    const breakfastIterator = this.#pancakeHouseMenu.createIterator();
    if (this.#isVegetarian(name, breakfastIterator)) {
      return true;
    }

    const dinnerIterator = this.#dinerMenu.createIterator();
    if (this.#isVegetarian(name, dinnerIterator)) {
      return true;
    }
    return false;
  }

  #isVegetarian(name: string, iterator: CustomIterator): boolean {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      if (menuItem.name === name) {
        if (menuItem.isVegetarian()) {
          return true;
        }
      }
    }
    return false;
  }
}

export default Waitress;
