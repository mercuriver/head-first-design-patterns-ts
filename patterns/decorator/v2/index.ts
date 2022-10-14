import BeverageGenerator from "./BeverageGenerator";
import { COST } from "../index.meta";

export const Espresso = BeverageGenerator("에스프레소", COST.ESPRESSO);
export const Decaffeine = BeverageGenerator("디카페인", COST.DECAFFEINE);
export const DarkRoast = BeverageGenerator("다크 로스트", COST.DARK_ROAST);
export const HouseBlend = BeverageGenerator("하우스 블랜드", COST.HOUSE_BLEND);

export const Mocha = BeverageGenerator("모카", COST.MOCHA);
export const Soy = BeverageGenerator("두유", COST.SOY);
export const Milk = BeverageGenerator("우유", COST.MILK);
export const WhippedCream = BeverageGenerator("휘핑 크림", COST.WHIPPED_CREAM);
