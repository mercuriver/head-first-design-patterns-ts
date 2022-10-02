export { default as FlyWithWings } from "./FlyWithWings";
export { default as FlyNoWay } from "./FlyNoWay";
export { default as FlyRocketPowered } from "./FlyRocketPowered";

export default interface FlyBehavior {
  fly(): string;
}
