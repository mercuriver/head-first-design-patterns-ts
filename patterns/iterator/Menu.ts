import Iterator from "./Iterator";

interface Menu<T> {
  createIterator(): Iterator<T>;
}

export default Menu;
