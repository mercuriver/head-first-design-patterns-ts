export { default as Quack } from "./Quack";
export { default as MuteQuack } from "./MuteQuack";
export { default as Squeak } from "./Squeak";

export default interface QuackBehavior {
  quack(): string;
}
