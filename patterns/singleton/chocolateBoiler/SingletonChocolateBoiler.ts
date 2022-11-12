class SingletonChocolateBoiler {
  static #uniqueInstance: SingletonChocolateBoiler;
  #empty: boolean;
  #boiled: boolean;

  // Todo: ES2022 classfield, constructor에 적용하는 법 알아보기
  private constructor() {
    this.#empty = true;
    this.#boiled = false;
  }

  static getInstance(): SingletonChocolateBoiler {
    if (this.#uniqueInstance == null) {
      console.log("[SingletonChocolateBoiler]의 유일 인스턴스 생성");
      this.#uniqueInstance = new SingletonChocolateBoiler();
    }
    console.log("[SingletonChocolateBoiler] 인스턴스 반환");
    return this.#uniqueInstance;
  }

  #isEmpty(): boolean {
    return this.#empty;
  }

  #isBoiled(): boolean {
    return this.#boiled;
  }

  fill() {
    if (this.#isEmpty()) {
      this.#empty = false;
      this.#boiled = false;
      console.log("[fill] 보일러에 우유와 초콜릿을 혼찹한 재료를 넣음");
    } else {
      console.warn("[fill] 작업 실패");
    }
  }

  drain() {
    if (!this.#isEmpty() && this.#isBoiled()) {
      console.log("[drain] 끓인 재료를 다음 단계로 넘김");
      this.#empty = true;
    } else {
      console.warn("[drain] 작업 실패");
    }
  }

  boil() {
    if (!this.#isEmpty() && !this.#isBoiled()) {
      console.log("[boil] 재료를 끓임");
      this.#boiled = true;
    } else {
      console.warn("[boil] 작업 실패");
    }
  }
}

export default SingletonChocolateBoiler;
