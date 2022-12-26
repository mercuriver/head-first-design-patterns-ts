import { expect } from "chai";

import { DinerMenu, PancakeHouseMenu } from "./ConcreteAggregate";
import Waitress from "./Client/Waitress";

describe(`[반복자 패턴] 테스트`, function () {
  let seq = 1;

  const pancakeHouseMenu = new PancakeHouseMenu();
  const dinerMenu = new DinerMenu();

  const waitress = new Waitress(pancakeHouseMenu, dinerMenu);

  waitress.printMenu();
  waitress.printVegetarianMenu();

  console.log("\nCustomer asks, is the Hotdog vegetarian?");
  console.log("Waitress says: ");
  if (waitress.isItemVegetarian("Hotdog")) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  console.log("\nCustomer asks, are the Waffles vegetarian?");
  console.log("Waitress says: ");
  if (waitress.isItemVegetarian("Waffles")) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  it(`[${seq++}] 초기값 테스트`, function () {});
});
