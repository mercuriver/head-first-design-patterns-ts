import Menu from "../AggregateInterface/Menu";
import CustomIterator from "../IteratorInterface/CustomIterator";

class Waitress {
  #pancakeHouseMenu: Menu;
  #dinerMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
    this.#pancakeHouseMenu = pancakeHouseMenu;
    this.#dinerMenu = dinerMenu;
  }

  printMenu(): void {
    const pancakeIterator = this.#pancakeHouseMenu.createIterator();
    const dinerIterator = this.#dinerMenu.createIterator();

    console.log("MENU\n----\nBREAKFAST");
    this.#printMenu(pancakeIterator);

    console.log("\nLUNCH");
    this.#printMenu(dinerIterator);
  }

  #printMenu(iterator: CustomIterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(
        `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`
      );
    }
  }

  printVegetarianMenu(): void {
    this.#printVegetarianMenu(this.#pancakeHouseMenu.createIterator());
    this.#printVegetarianMenu(this.#dinerMenu.createIterator());
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

  #printVegetarianMenu(iterator: CustomIterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      if (menuItem.isVegetarian()) {
        console.log(
          `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`
        );
      }
    }
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
