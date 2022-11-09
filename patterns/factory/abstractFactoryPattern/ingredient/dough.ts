interface Dough {
  toString(): string;
}

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

export type { Dough };
export { ThickCrustDough, ThinCrustDough };
