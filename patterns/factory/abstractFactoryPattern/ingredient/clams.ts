interface Clams {
  toString(): string;
}

class FreshClams implements Clams {
  toString() {
    return "Fresh Clams from Long Island Sound";
  }
}

class FrozenClams implements Clams {
  toString() {
    return "Frozen Clams from Chesapeake Bay";
  }
}

export { FreshClams, FrozenClams };
