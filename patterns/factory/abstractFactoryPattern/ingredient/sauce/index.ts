import Sauce from "./Sauce";

class PlumTomatoSauce implements Sauce {
  toString() {
    return "Tomato sauce with plum tomatoes";
  }
}

class MarinaraSauce implements Sauce {
  toString() {
    return "Marinara Sauce";
  }
}

export { PlumTomatoSauce, MarinaraSauce };