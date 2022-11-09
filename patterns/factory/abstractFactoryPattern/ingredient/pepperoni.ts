interface Pepperoni {
  toString(): string;
}

class SlicedPepperoni implements Pepperoni {
  toString() {
    return "Sliced Pepperoni";
  }
}

export type { Pepperoni };
export { SlicedPepperoni };
