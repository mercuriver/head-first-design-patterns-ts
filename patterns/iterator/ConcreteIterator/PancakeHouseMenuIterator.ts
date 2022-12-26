import CustomIterator from "../IteratorInterface/CustomIterator";
import MenuItem from "../MenuItem";

class PancakeHouseMenuIterator implements CustomIterator {
  #items: Set<MenuItem>;

  constructor(items: Set<MenuItem>) {
    this.#items = items;

    // console.log("######## PancakeHouseMenuIterator");
    // for (let item of items.values()) {
    //   console.log(item.toString());
    // }
  }

  next(): MenuItem {
    const [next] = this.#items;
    this.#items.delete(next);
    return next;
  }

  hasNext(): boolean {
    return this.#items.size > 0;
  }
}

export default PancakeHouseMenuIterator;
