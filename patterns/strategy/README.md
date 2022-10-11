# 전략 패턴 (Strategy Pattern)

## 개념

### Head First 디자인 패턴

전략 패턴(Strategy Pattern)은 알고리즘군을 정의하고 캡슐화해서 각각의 알고리즘군을 수정해서 쓸 수 있게 해줍니다. 전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 독립적으로 변경할 수 있습니다.

### GoF의 디자인 패턴

동일 계열의 알고리즘군을 정의하고, 각각의 알고리즘을 캡슐화하며, 이들을 상호 교환이 가능하도록 만드는 패턴입니다. 알고리즘을 사용하는 사용자와 상관없이 독립적으로 알고리즘을 다양하게 변경할 수 있게 합니다.

## 요약

- 향후 변경될 우려가 있는 요소 혹은 공통 행동(알고리즘)을 정리하여 분리(캡슐화)한다.
- 공통 사항으로 묶여진 행동은 대표 시그니처를 정의하여 공통 인터페이스를 적용한다.
- 인터페이스를 통해 구현된 구현체는 다형성으로 대표 시그니처를 활용할 수 있게 된다.
- 인터페이스만 맞추면 행동을 유연하게 확장할 수 있게 된다.
- 객체는 구현체(인터페이스) 참조값을 통해 대표 시그니처를 호출하여 행동을 위임한다.
- 객체는 행동에 대해 인터페이스만 맞으면 문제가 없기 때문에 유연성을 얻게 된다.
- 객체는 올바르게 행동 참조값을 제어할 경우, 실행 중에도 행동을 변경할 수 있게 된다.

## 설명

- 디자인 원칙 [1], [바뀌는 부분은 캡슐화한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#1-%EB%B0%94%EB%80%8C%EB%8A%94-%EB%B6%80%EB%B6%84%EC%9D%80-%EC%BA%A1%EC%8A%90%ED%99%94%ED%95%9C%EB%8B%A4)

  향후 변경 가능성이 있는 부분을 분리한다. 오리 객체에서 나는 행동과 우는 행동이 객체에 따라 달라질 소지가 있으므로 이를 분리하여 디자인한다.

  `추상 클래스 duck`에서 행동을 위임하기 위한 행동 인터페이스 형식의 레퍼런스 변수 `FlyBehavior`, `QuackBehavior` 2개를 선언한다. 디자인 원직 [2], [3]이 함께 고려되어 나온 구조다.

- 디자인 원칙 [2], [구현보다는 인터페이스에 맞춰서 프로그래밍한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#2-%EA%B5%AC%ED%98%84%EB%B3%B4%EB%8B%A4%EB%8A%94-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EB%A7%9E%EC%B6%B0%EC%84%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%ED%95%9C%EB%8B%A4)

  행동의 대표 시그니처를 정리하여 인터페이스로 정의한다. 알고리즘 군을 정리하여 `FlyBehavior`, `QuackBehavior`를 인터페이스로 정의한 후, 알고리즘 군 각각의 구현체에서 구체적인 행동 구현은 작성한다.

- 디자인 원칙 [3], [상속보다는 구성을 활용한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#3-%EC%83%81%EC%86%8D%EB%B3%B4%EB%8B%A4%EB%8A%94-%EA%B5%AC%EC%84%B1%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C%EB%8B%A4)

  `추상 클래스 duck`을 상속받은 오리 객체에서는 인스턴스 생성 시 사용할 행동 구현체를 참조값으로 지니며, 행동을 위임한 메소드(`duck.performFly`, `duck.performQuack`)를 통해 구현체 참조값을 사용하여 행동을 요청한다.

  필요에 따라 행동 참조값은 setter(`duck.setFlyBehavior`, `duck.setQuackBehavior`)를 통해 실행 중에도 행동을 변경 가능하다.
