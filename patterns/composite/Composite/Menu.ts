import MenuComponent from "../Component/MenuComponent";

class Menu extends MenuComponent {
  #menuComponents: MenuComponent[];
  #name: string;
  #description: string;

  constructor(name: string, description: string) {
    super();
    this.#menuComponents = [];
    this.#name = name;
    this.#description = description;
  }

  add(menuComponent: MenuComponent): void {
    this.#menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.#menuComponents.indexOf(menuComponent);
    if (index !== -1) {
      this.#menuComponents.splice(index, 1);
    }
  }

  getChild(index: number): MenuComponent {
    return this.#menuComponents[index];
  }

  get name(): String {
    return this.#name;
  }

  get description(): String {
    return this.#description;
  }

  print(): string[] {
    console.log(`\n${this.name}, ${this.description}---------------------`);
    return this.#menuComponents.map((menuComponent) => {
      return menuComponent.print()[0];
    });
  }
}

export default Menu;
