abstract class Pizza {
  #name: string;
  #dough: string;
  #sauce: string;
  #toppings: Array<string>;

  prepare(): void {
    console.log(`준비 중: ${this.#name}`);
    console.log("도우를 돌리는 중...");
    console.log("소스를 뿌리는 중...");
    console.log("토핑를 올리는 중...");
    console.log(this.#toppings.join("   "));
  }

  bake(): void {}
  cut(): void {}
  box(): void {}

  get name(): string {
    return this.#name;
  }
}

export default Pizza;
