import { common } from "./index.meta";

abstract class CaffeineBeverage {
  abstract brew(): void;

  abstract addCondiments(): void;

  boilWater(): string {
    return common.boilWater;
  }

  pourInCup(): string {
    return common.pourInCup;
  }

  customerWantsCondiments(): boolean {
    return true;
  }

  // Todo: override 방지 처리
  prepareRecipe(): string[] {
    const recipe = [];

    recipe.push(this.boilWater());
    recipe.push(this.brew());
    recipe.push(this.pourInCup());
    if (this.customerWantsCondiments()) {
      recipe.push(this.addCondiments());
    }

    return recipe;
  }
}

export default CaffeineBeverage;
