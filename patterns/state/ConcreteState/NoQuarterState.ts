import State from "../State";
import GumballMachine from "../Context/GumballMachine";

class NoQuarterState implements State {
  #gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.#gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You inserted a quarter");
    this.#gumballMachine.setState(this.#gumballMachine.hasQuarterState);
  }

  ejectQuarter(): void {
    console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
    console.log("You turned, but there's no quarter");
  }

  dispense(): void {
    console.log("You need to pay first");
  }

  refill(): void {}

  toString(): string {
    return "waiting for quarter";
  }
}

export default NoQuarterState;
