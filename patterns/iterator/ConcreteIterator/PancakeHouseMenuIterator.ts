import CustomIterator from "../IteratorInterface/CustomIterator";
import MenuItem from "../MenuItem";

class PancakeHouseMenuIterator implements CustomIterator<MenuItem> {
  #items: Set<MenuItem>;

  constructor(items: Set<MenuItem>) {
    this.#items = items;
  }

  next(): MenuItem {
    return null;
  }

  hasNext(): boolean {
    return this.#items.size > 0;
  }
}

export default PancakeHouseMenuIterator;
