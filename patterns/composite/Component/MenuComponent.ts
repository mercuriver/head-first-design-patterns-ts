abstract class MenuComponent {
  add(menuComponent: MenuComponent): void {
    throw new SyntaxError("Unsupported operation.");
  }
  remove(menuComponent: MenuComponent): void {
    throw new SyntaxError("Unsupported operation.");
  }
  getChild(index: number): MenuComponent {
    throw new SyntaxError("Unsupported operation.");
  }

  getName(): string {
    throw new SyntaxError("Unsupported operation.");
  }
  getDescription(): string {
    throw new SyntaxError("Unsupported operation.");
  }
  getPrice(): number {
    throw new SyntaxError("Unsupported operation.");
  }
  isVegetarian(): boolean {
    throw new SyntaxError("Unsupported operation.");
  }

  print(): void {
    throw new SyntaxError("Unsupported operation.");
  }
}

export default MenuComponent;
