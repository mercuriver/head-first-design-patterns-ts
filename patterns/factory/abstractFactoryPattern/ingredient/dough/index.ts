import Dough from "./Dough";

class ThickCrustDough implements Dough {
  toString() {
    return "ThickCrust style extra thick crust dough";
  }
}

class ThinCrustDough implements Dough {
  toString() {
    return "Thin Crust Dough";
  }
}

export { ThickCrustDough, ThinCrustDough };
