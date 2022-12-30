interface Person {
  get name(): string;
  get gender(): string;
  get interests(): string;
  get geekRating(): number;

  set name(name: string);
  set gender(gender: string);
  set interests(interests: string);
  set geekRating(rating: number);
}
export default Person;
