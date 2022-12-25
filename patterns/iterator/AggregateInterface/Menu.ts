import CustomIterator from "../IteratorInterface/CustomIterator";

interface Menu<T> {
  createIterator(): CustomIterator<T>;
}

export default Menu;
