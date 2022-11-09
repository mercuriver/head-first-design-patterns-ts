interface Veggies {
  toString(): string;
}

class BlackOlives implements Veggies {
  toString() {
    return "Black Olives";
  }
}

class Spinach implements Veggies {
  toString() {
    return "Spinach";
  }
}

class Eggplant implements Veggies {
  toString() {
    return "Eggplant";
  }
}

class Mushroom implements Veggies {
  toString() {
    return "Mushrooms";
  }
}

class Onion implements Veggies {
  toString() {
    return "Onion";
  }
}

class Garlic implements Veggies {
  toString() {
    return "Garlic";
  }
}

class RedPepper implements Veggies {
  toString() {
    return "Red Pepper";
  }
}

export type { Veggies };
export { BlackOlives, Spinach, Eggplant, Mushroom, Onion, Garlic, RedPepper };
