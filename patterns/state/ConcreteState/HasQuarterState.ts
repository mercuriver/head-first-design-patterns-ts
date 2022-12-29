import State from "../State";
import GumballMachine from "../Context/GumballMachine";

class HasQuarterState implements State {
  #gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.#gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  ejectQuarter(): void {
    console.log("Quarter returned");
    this.#gumballMachine.setState(this.#gumballMachine.noQuarterState);
  }

  turnCrank(): void {
    console.log("You turned...");

    const isWinner = Math.floor(Math.random() * 10) === 0;

    if (isWinner && this.#gumballMachine.count > 1) {
      this.#gumballMachine.setState(this.#gumballMachine.winnerState);
    } else {
      this.#gumballMachine.setState(this.#gumballMachine.soldState);
    }
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  refill(): void {}

  toString(): string {
    return "waiting for turn of crank";
  }
}

export default HasQuarterState;
