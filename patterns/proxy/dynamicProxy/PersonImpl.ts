import Person from "./Person";

class PersonImpl implements Person {
  #name: string;
  #gender: string;
  #interests: string;
  #rating: number;
  #ratingCount: number;

  constructor() {
    this.#ratingCount = 0;
  }

  get name(): string {
    return this.#name;
  }

  get gender(): string {
    return this.#gender;
  }

  get interests(): string {
    return this.#interests;
  }

  get geekRating(): number {
    if (this.#ratingCount == 0) return 0;
    return this.#rating / this.#ratingCount;
  }

  set name(name: string) {
    this.#name = name;
  }

  set gender(gender: string) {
    this.#gender = gender;
  }

  set interests(interests: string) {
    this.#interests = interests;
  }

  set geekRating(rating: number) {
    this.#rating += rating;
    this.#ratingCount++;
  }
}

export default PersonImpl;
