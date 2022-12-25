import CustomIterator from "./CustomIterator";

interface Menu<T> {
  createIterator(): CustomIterator<T>;
}

export default Menu;
