import MenuItem from "../MenuItem";
interface CustomIterator {
  hasNext(): boolean;
  next(): MenuItem;
}

export default CustomIterator;
