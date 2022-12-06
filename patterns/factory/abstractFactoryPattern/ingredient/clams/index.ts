import Clams from "./Clams";

class FreshClams implements Clams {
  // ConcreateProduct_6_1
  toString() {
    return "Fresh Clams from Long Island Sound";
  }
}

class FrozenClams implements Clams {
  // ConcreateProduct_6_2
  toString() {
    return "Frozen Clams from Chesapeake Bay";
  }
}

export { FreshClams, FrozenClams };
