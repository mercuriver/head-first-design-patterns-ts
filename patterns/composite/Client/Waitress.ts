import MenuComponent from "../Component/MenuComponent";

class Waitress {
  #allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.#allMenus = allMenus;
  }

  printMenu(): string[] {
    return this.#allMenus.print();
  }
}

export default Waitress;
