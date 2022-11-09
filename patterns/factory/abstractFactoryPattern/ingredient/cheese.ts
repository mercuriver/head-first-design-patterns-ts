interface Cheese {
  toString(): string;
}

class ParmesanCheese implements Cheese {
  toString() {
    return "Shredded Parmesan";
  }
}

class MozzarellaCheese implements Cheese {
  toString() {
    return "Shredded Mozzarella";
  }
}

class ReggianoCheese implements Cheese {
  toString() {
    return "Reggiano Cheese";
  }
}

export type { Cheese };
export { ParmesanCheese, MozzarellaCheese, ReggianoCheese };
