const meta = {
  message_swim: "모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠",
};

class Duck {
  constructor() {}

  public swim(): string {
    return meta.message_swim;
  }
}

export { meta };
export default Duck;
