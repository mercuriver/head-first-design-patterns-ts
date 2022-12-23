import CaffeineBeverage from "./CaffeineBeverage";
import { tea } from "./index.meta";

class Tea extends CaffeineBeverage {
  #needCondiments: boolean;

  constructor(needCondiments: boolean) {
    super();
    this.#needCondiments = needCondiments;
  }

  brew(): string {
    return tea.brew;
  }

  addCondiments(): string {
    return tea.condiments;
  }

  customerWantsCondiments(): boolean {
    return this.#needCondiments;
  }
}

export default Tea;
