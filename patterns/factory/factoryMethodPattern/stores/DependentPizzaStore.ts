/**
 * 매우 의존적인 PizzaStore 클래스 작성
 * 이 클래스에서는 필요한 구상 피자 클래스를 모두 알아야하며, 새로은 스타일의 피자를 추가하려면 의존하고 있는 구상 피자 클래스 역시 매우 빠른 속도로 증가한다
 */

import Pizza from "../Pizza";
import {
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStyleVeggiePizza,
  NYStylePepperoniPizza,
} from "../styles/ny";
import {
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStyleVeggiePizza,
  ChicagoStylePepperoniPizza,
} from "../styles/chicago";

import {
  PIZZA_STYLE,
  PIZZA_TYPE,
  type PizzaStyle,
  type PizzaType,
} from "../../index.meta";

class DependentPizzaStore {
  createPizza(style: PizzaStyle, type: PizzaType): string {
    let pizza: Pizza;

    if (style === PIZZA_STYLE.NEW_YORK) {
      if (type === PIZZA_TYPE.CHEESE) {
        pizza = new NYStyleCheesePizza();
      } else if (type === PIZZA_TYPE.CLAM) {
        pizza = new NYStyleClamPizza();
      } else if (type === PIZZA_TYPE.VEGGIE) {
        pizza = new NYStyleVeggiePizza();
      } else if (type === PIZZA_TYPE.PEPPERONI) {
        pizza = new NYStylePepperoniPizza();
      }
    } else if (style === PIZZA_STYLE.CHICAGO) {
      if (type === PIZZA_TYPE.CHEESE) {
        pizza = new ChicagoStyleCheesePizza();
      } else if (type === PIZZA_TYPE.CLAM) {
        pizza = new ChicagoStyleClamPizza();
      } else if (type === PIZZA_TYPE.VEGGIE) {
        pizza = new ChicagoStyleVeggiePizza();
      } else if (type === PIZZA_TYPE.PEPPERONI) {
        pizza = new ChicagoStylePepperoniPizza();
      }
    } else {
      console.warn("Warning: 유효하지 않은 피자 타입");
      return null;
    }

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza.name;
  }
}

export default DependentPizzaStore;
