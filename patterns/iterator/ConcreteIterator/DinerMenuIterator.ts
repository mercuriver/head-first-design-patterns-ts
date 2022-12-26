import CustomIterator from "../IteratorInterface/CustomIterator";
import MenuItem from "../MenuItem";

class DinerMenuIterator implements CustomIterator {
  #items: MenuItem[];
  #position: number;

  constructor(items: MenuItem[]) {
    this.#items = items;
    this.#position = 0;

    // console.log("######## DinerMenuIterator");
    // items.map((item) => console.log(item.toString()));
  }

  next(): MenuItem {
    return this.#items[this.#position++];
  }

  hasNext(): boolean {
    return this.#items.length > this.#position;
  }
}

export default DinerMenuIterator;
