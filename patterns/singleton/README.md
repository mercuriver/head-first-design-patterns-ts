# 싱글턴 패턴(Singleton Pattern)

## 개념

### Head First 디자인 패턴

싱글턴 패턴(Singleton Pattern)은 클래스 인스턴스를 하나만 만들고, 그 인스턴스로의 전역 접근을 제공합니다.

### GoF의 디자인 패턴

어떤 클래스의 인스턴스는 오직 하나임을 보장하며, 이 인스턴스에 접근할 수 있는 전역적인 접촉점을 제공하는 패턴입니다.

### refactoring.guru

싱글턴은 클래스에 인스턴스가 하나만 있도록 하면서 이 인스턴스에 대한 전역 접근​(액세스) 지점을 제공하는 생성 디자인 패턴입니다.

## 설명

싱글턴 패턴은 클래스에 인스턴스가 하나로 유지되도록 제한한다. 스레드 풀, 캐시, 대화상자, 사용자 설정, 레지스트리 설정 처리 객체 등 일부 공유 리소스에 대한 접근을 제어하여, 오류를 억제하고 일관성을 유지하기 위해 유일한 인스턴스에서 처리해야 하는 경우가 있다.

- 클래스에 싱글턴 패턴을 적용하면, 그 클래스의 인스턴스는 오직 1개로만 유지한다.

- 일반적으로 getInstance()라는 정적 메소드를 통해 요청이 발생할 때, 인스턴스를 생성하거나 생성된 인스턴스를 반환한다.

- 클래스의 생성자를 private로 제한하여, 내부 getInstance() 메소드 이외에서의 호출을 막는다.

- 일반적으로 인스턴스 요청이 발생할 때 인스턴스를 생성하는 '게으른 인스턴스 생성(lazy instantiation, 지연 초기화)'을 적용한다.

- 싱글턴 패턴을 사용하면 전역 변수를 사용할 때와 마찬가지로 객체 인스턴스를 어디서든 접근할 수 있지만, 전역 변수가 갖는 단점을 보완할 수 있다. 싱글턴이 필요한 객체를 전역 변수에 할당할 경우, 모든 코드에서 잠재적으로 전역 변수를 훼손할 우려가 있기 때문에 오류로부터 안전하지 못하다.

- 싱글턴 패턴을 사용하면 인스턴스를 사용하려는 모든 객체에서 동일한 리소스를 사용할 수 있다.

- 멀티스레드 환경에서 getInstance 내부의 인스턴스 생성 시점에 따른 오류를 막기 위해 몇 가지 주의사항이 있다.

  - 멀티스레드 환경에서는 속도와 리소스 문제를 파악한 후 적절한 구현 방식을 택해야 한다.

    javascript는 기본이 싱글스레드 기반 언어이기 때문에 크게 고려하지 않아도 되지만, 예제 코드는 다음 두 가지 방식을 작성해 두었다.

    - [preload](./preload/), 인스턴스를 처음부터 만들어두는 방식.

    - [DCL, double-checkedLocking](./double-checkedLocking/), 인스턴스 생성 여부를 다시 한번 체크하는 로직을 두는 방식.

- 싱글턴은 클래스가 갖는 본연의 책임 이외에도 단일 인스턴스 생성에 대한 책임에 대해서도 다뤄야하기 때문에 처음부터 단일 책임 원칙을 위반한다.

- 싱글턴 패턴은 싱글턴 코드가 바뀌면 사용하는 객체들도 함께 수정이 필요하기 때문에, 사용하는 코드들이 싱글턴 인스턴스에 의존성이 생긴다. 느슨한 결합 원칙에는 위배되기 쉽다.

- 애플리케이션 구현 시 싱글턴 패턴이 많이 사용되었다면, 전반적인 설계를 다시 고려하는 편이 바람직하다. 싱글턴 패턴은 제한된 상황에 제한된 용도를 위해 만들어진 것이다.

### 장점

- 클래스가 하나의 인스턴스만 갖는 것을 보장한다.

- 인스턴스에 대한 접근을 전역 변수처럼 수월하게 할 수 있다.

- 싱글턴 객체는 요청이 있을 때만 생성된다.

### 단점

- 단일 책임 원칙을 위반한다.

- 싱글턴 패턴으로 인해 높은 결합에 의한 느슨한 결합 원칙 위배 등 바람직하지 못한 설계가 야기될 수 있다.

- 멀티스레드 환경에서는 객체 생성 시점과 제어에 주의해야 한다.

- 유닛 테스트를 통한 테스트 코드를 구성하기 어려움이 있다. 일반적인 테스트 프레임워크들은 모의 객체를 생성할 때 상속을 활용하지만 싱글턴의 경우 클래스 생성자가 비공개이며, 대부분 언어에서 정적 메소드는 오버라이딩이 불가능하기 때문에 난항을 겪게 된다.
