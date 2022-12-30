class ImageProxy {
  #imageURL: string;
  #retrieving: boolean;
  #isReady: boolean;

  constructor(url: string) {
    this.#retrieving = false;
    this.#imageURL = url;
  }

  get iconWidth(): number {
    return this.#isReady ? 200 : 800;
  }

  get iconHeight(): number {
    return this.#isReady ? 150 : 600;
  }

  #setImageIcon(): void {
    this.#isReady = true;
  }

  paintIcon(): void {
    this.#setImageIcon();
  }
}
