import CustomIterator from "../IteratorInterface/CustomIterator";

interface Menu {
  createIterator(): CustomIterator;
}

export default Menu;
