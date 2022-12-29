import State from "../State";
import GumballMachine from "../Context/GumballMachine";

class SoldState implements State {
  #gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.#gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  ejectQuarter(): void {
    console.log("Sorry, you already turned the crank");
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!");
  }

  dispense(): void {
    this.#gumballMachine.releaseBall();
    if (this.#gumballMachine.count > 0) {
      this.#gumballMachine.setState(this.#gumballMachine.noQuarterState);
    } else {
      console.log("Oops, out of gumballs!");
      this.#gumballMachine.setState(this.#gumballMachine.soldOutState);
    }
  }

  refill(): void {}

  toString(): string {
    return "dispensing a gumball";
  }
}

export default SoldState;
