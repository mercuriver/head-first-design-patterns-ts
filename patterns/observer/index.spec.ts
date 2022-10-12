import { expect } from "chai";
import { printf, printWithValues } from "./index.utils";

describe(`util 테스트`, function () {
  it(`문자열 포멧 함수 확인`, function () {
    expect(printf("%0 %1 %2")).to.equal("");
    expect(printf("%0 %1 %2", "A", "B", "C")).to.equal("A B C");
    expect(printf("%0 %1 %1", "A", "B", "C")).to.equal("A B B");
    expect(printf("%2 %2 %1", "A", "B", "C")).to.equal("C C B");
  });

  it(`문자열 포멧 함수 확인`, function () {
    const printWeather = printWithValues(0, 1, 2);
    expect(printWeather("")).to.equal("");
    expect(printWeather("%0 %1 %2")).to.equal("0 1 2");
    expect(printWeather("%0 %1 %1")).to.equal("0 1 1");
    expect(printWeather("%2 %2 %1")).to.equal("2 2 1");
  });
});
