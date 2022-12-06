import Cheese from "./Cheese";

class ParmesanCheese implements Cheese {
  // ConcreateProduct_3_1
  toString() {
    return "Shredded Parmesan";
  }
}

class MozzarellaCheese implements Cheese {
  // ConcreateProduct_3_2
  toString() {
    return "Shredded Mozzarella";
  }
}

class ReggianoCheese implements Cheese {
  // ConcreateProduct_3_3
  toString() {
    return "Reggiano Cheese";
  }
}

export { ParmesanCheese, MozzarellaCheese, ReggianoCheese };
