import Iterator from "./Iterator";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const MAX_ITEMS = 6;

class DinerMenu implements Menu<MenuItem> {
  static final: number;
  #numberOfItems: number;
  #menuItems: MenuItem[];

  constructor() {
    this.#menuItems = new MenuItem[MAX_ITEMS]();

    this.#numberOfItems = 0;
  }

  createIterator(): Iterator<MenuItem> {
    return null;
  }
}

export default DinerMenu;
