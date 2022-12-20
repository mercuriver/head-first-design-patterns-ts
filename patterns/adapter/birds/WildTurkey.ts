import Turkey from "../interfaces/Turkey";
import { turkeyMessages } from "../index.meta";

class WildTurkey implements Turkey {
  gobble(): string {
    return turkeyMessages.gobble;
  }
  fly(): string {
    return turkeyMessages.fly;
  }
}

export default WildTurkey;
