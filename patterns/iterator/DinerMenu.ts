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

    addItem(
      "Vegetarian BLT",
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );
    addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99);
    addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    );
    addItem(
      "Hotdog",
      "A hot dog, with sauerkraut, relish, onions, topped with cheese",
      false,
      3.05
    );
    addItem(
      "Steamed Veggies and Brown Rice",
      "A medly of steamed vegetables over brown rice",
      true,
      3.99
    );
    addItem(
      "Pasta",
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

  createIterator(): Iterator<MenuItem> {
    return null;
  }

  getMenuItems(): MenuItem[] {
    return this.#menuItems;
  }
}

export default DinerMenu;
