import State from "../State";

class GumballMachine {
  #soldOutState: State;
  #noQuarterState: State;
  #hasQuarterState: State;
  #soldState: State;
  #winnerState: State;

  #state: State;
  #count: number;

  GumballMachine(numberGumballs: number) {
    // this.#soldOutState = new SoldOutState(this);
    // this.#noQuarterState = new NoQuarterState(this);
    // this.#hasQuarterState = new HasQuarterState(this);
    // this.#soldState = new SoldState(this);
    // this.#winnerState = new WinnerState(this);

    // this.#state = soldOutState;
    this.#state = null;
    this.#count = numberGumballs;

    // if (numberGumballs > 0) {
    // 	this.#state = noQuarterState;
    // }
  }

  insertQuarter(): void {
    this.#state.insertQuarter();
  }

  ejectQuarter(): void {
    this.#state.ejectQuarter();
  }

  turnCrank(): void {
    this.#state.turnCrank();
    this.#state.dispense();
  }

  setState(state: State): void {
    this.#state = state;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.#count > 0) {
      this.#count = this.#count - 1;
    }
  }

  get count(): number {
    return this.#count;
  }

  refill(count: number): void {
    this.#count += count;
    console.log(
      "The gumball machine was just refilled; its new count is: " + this.count
    );
    this.#state.refill();
  }

  get state(): State {
    return this.#state;
  }

  get soldOutState(): State {
    return this.#soldOutState;
  }

  get noQuarterState(): State {
    return this.#noQuarterState;
  }

  get hasQuarterState(): State {
    return this.#hasQuarterState;
  }

  get soldState(): State {
    return this.#soldState;
  }

  get winnerState(): State {
    return this.#winnerState;
  }

  toString(): string {
    const result: string[] = [];
    result.push("\nMighty Gumball, Inc.");
    result.push("\nJava-enabled Standing Gumball Model #2004");
    result.push("\nInventory: " + this.#count + " gumball");
    if (this.#count != 1) {
      result.push("s");
    }
    result.push("\n");
    result.push("Machine is " + this.#state + "\n");
    return result.join("");
  }
}

export default GumballMachine;
