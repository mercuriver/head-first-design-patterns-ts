import Sauce from "./Sauce";

class PlumTomatoSauce implements Sauce {
  // ConcreateProduct_2_1
  toString() {
    return "Tomato sauce with plum tomatoes";
  }
}

class MarinaraSauce implements Sauce {
  // ConcreateProduct_2_2
  toString() {
    return "Marinara Sauce";
  }
}

export { PlumTomatoSauce, MarinaraSauce };
