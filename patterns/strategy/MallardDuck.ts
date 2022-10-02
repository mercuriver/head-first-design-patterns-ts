import Duck from "./Duck";

const meta = {
  message_display: "저는 물오리입니다.",
};

class MallardDuck extends Duck {
  constructor() {
    super();
  }

  display(): string {
    return meta.message_display;
  }
}

export { meta };
export default MallardDuck;
