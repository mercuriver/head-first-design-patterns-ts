class ImageComponent {
  #imageURL;

  constructor(imageURL: string) {
    this.#imageURL = imageURL;
  }

  setIconPath(imageURL: string): void {
    this.#imageURL = imageURL;
  }

  paintComponent(g: HTMLCanvasElement): void {}
}

export default ImageComponent;
