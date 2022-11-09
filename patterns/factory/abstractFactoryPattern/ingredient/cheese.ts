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

export { ParmesanCheese, MozzarellaCheese };
