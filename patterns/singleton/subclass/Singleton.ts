class Singleton {
  // Todo: es2022 classfield 적용 방식 고민
  // static #uniqueInstance: Singleton;
  static uniqueInstance: Singleton;

  protected Singleton() {}

  static getInstance(): Singleton {
    if (this.uniqueInstance == null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
}
export default Singleton;
