import { expect } from "chai";

import GumballMachine from "./Context/GumballMachine";

describe(`[상태 패턴] 테스트`, function () {
  let seq = 1;

  beforeEach(() => {});

  it(`[${seq++}] 초기값 체크`, function () {});

  const gumballMachine = new GumballMachine(10);

  console.log(gumballMachine.toString());

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine.toString());

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine.toString());

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine.toString());

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine.toString());

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  console.log(gumballMachine.toString());
});
