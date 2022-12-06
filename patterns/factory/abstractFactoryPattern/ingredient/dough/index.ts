import Dough from "./Dough";

class ThickCrustDough implements Dough {
  // ConcreateProduct_1_1
  toString() {
    return "ThickCrust style extra thick crust dough";
  }
}

class ThinCrustDough implements Dough {
  // ConcreateProduct_1_2
  toString() {
    return "Thin Crust Dough";
  }
}

export { ThickCrustDough, ThinCrustDough };
