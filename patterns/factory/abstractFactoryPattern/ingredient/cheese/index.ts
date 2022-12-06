import Cheese from "./Cheese";

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

export { ParmesanCheese, MozzarellaCheese, ReggianoCheese };
