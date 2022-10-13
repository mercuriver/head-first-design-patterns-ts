import Beverage from "./Beverage";

abstract class CondimentDecorator extends Beverage {
  #beverage: Beverage;
  abstract cost(): number;
}

export default CondimentDecorator;
