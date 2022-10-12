# 옵저버 패턴 (Observer Pattern)

## 개념

### Head First 디자인 패턴

한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체에게 연락이 가고 자동으로 내용이 갱신되는 방식으로 일대다(one-to-many) 의존성을 정의합니다.

### GoF의 디자인 패턴

객체들 사이에 일 대 다의 의존 관계를 정의해 두어, 어떤 객체의 상태가 변할 때 그 객체에 의존성을 가진 다른 객체들이 그 변화를 통지받고 자동으로 갱신될 수 있게 만드는 패턴입니다.

## 요약

하나의 객체을 중심으로 서로 연동되는 객체로 구성된 시스템을 구성할 때 일관성을 유지할 수 있게 한다.

- 이 패턴에서 중요한 객체는 주제(subject)와 감시자(observer)이다.
- 주제와 옵저버는 인터페이스 조건만 만족한다면 서로에게 어떤 영향도 주어선 안된다.
- 주제는 상태 변화를 단지 통보할 뿐, 옵저버에 대한 세부 정보를 다루지 않는다.
- 주제는 옵저버 등록/해제 처리와 상태 변화 시 통보를 위한 주제 인터페이스가 필요하다.
- 모든 옵저버는 주제의 상태 변화를 통보 수신을 위한 옵저버 인터페이스가 필요하다
  - 옵저버는 주제와 자신의 상태를 동기화하기 위해 주제의 상태를 확인할 수 있다.
- 주제와 옵저버는 서로 독립적으로 재사용 가능하다.
- 상태 변경 시 통보 방식은 push와 pull 2가지 방식으로 구현 가능하다.
- push 방식
  - 통보와 함께 갱신 상태가 수신되어 이 데이터를 활용하여 작업한다.
  - 구현 방식에 따라 통보 함수 시그니처 타입을 위해 옵저버 인터페이스에 제네릭을 사용해야 한다.
- pull 방식
  - 데이터 없이 통보만 수신하며, 필요한 데이터는 직접 주제의 상태를 확인하여 작업한다.
  - 옵저버 인터페이스에서는 타입에 대한 정보가 필요 없으므로 보다 유연하게 구성이 가능하다.
- 일관성 관리를 위해 객체 간 결합도가 높아지지 않도록 주의해야 한다.
- 출판-구독(Publish-Subscribe) 패턴과는 일대다 의존성 관리 성격만 같을 뿐 서로 다른 패턴이다
  - Pub-sub 패턴은 구독자가 구독 유형을 제어하는 등, 상호소통을 통한 보다 세세한 조작이 가능하다.

## 설명

코드 구현은 push 방식과 pull 방식을 나누어 구현하여, 각각 [pushMechanism](https://github.com/mercuriver/head-first-design-patterns-ts/tree/main/patterns/observer/pushMechanism), [pullMechanism](https://github.com/mercuriver/head-first-design-patterns-ts/tree/main/patterns/observer/pushMechanism) 디렉토리로 분리되어 있다.

- 디자인 원칙 [1], [바뀌는 부분은 캡슐화한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#1-%EB%B0%94%EB%80%8C%EB%8A%94-%EB%B6%80%EB%B6%84%EC%9D%80-%EC%BA%A1%EC%8A%90%ED%99%94%ED%95%9C%EB%8B%A4)

  주제와 옵저버는 옵저버가 주제에 의존적인 구조이지만, 인터페이스를 통한 느슨한 결합 하에 서로 독자적이고 유연하게 변화할 수 있기에 이 두 객체를 분리하여 캡슐화한다.

- 디자인 원칙 [2], [구현보다는 인터페이스에 맞춰서 프로그래밍한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#2-%EA%B5%AC%ED%98%84%EB%B3%B4%EB%8B%A4%EB%8A%94-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EB%A7%9E%EC%B6%B0%EC%84%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%ED%95%9C%EB%8B%A4)

  느슨한 결합을 위한 최소한의 상호작용을 주제 인터페이스와 옵저버 인터페이스로 구성하여 패턴을 구현하였다.

- 디자인 원칙 [3], [상속보다는 구성을 활용한다](https://github.com/mercuriver/head-first-design-patterns-ts/blob/main/README.md#3-%EC%83%81%EC%86%8D%EB%B3%B4%EB%8B%A4%EB%8A%94-%EA%B5%AC%EC%84%B1%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C%EB%8B%A4)

  주제에서 옵저버 목록을 상속이 아닌 구성을 통해 관리한다. 이를 통해 프로그램 실행 중에도 동적으로 각 옵저버의 등록/해제 작업을 할 수 있다.

- 디자인 원칙 [4], [상호작용하는 객체 사이에는 가능하면 느슨한 결합을 사용해야한다](https://github.com/mercuriver/head-first-design-patterns-ts#4-%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B0%9D%EC%B2%B4-%EC%82%AC%EC%9D%B4%EC%97%90%EB%8A%94-%EA%B0%80%EB%8A%A5%ED%95%98%EB%A9%B4-%EB%8A%90%EC%8A%A8%ED%95%9C-%EA%B2%B0%ED%95%A9%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%95%BC%ED%95%9C%EB%8B%A4)

  주제 인터페이스와 옵저버 인터페이스 간 상호작용을 위한 최소한의 인터페이스를 통해 느긋한 결합을 활용한다. 이를 통해 주제나 옵저버는 서로 명확한 소통 규칙을 지키는 범주 내에서 굉장한 유연성 얻게 된다.
