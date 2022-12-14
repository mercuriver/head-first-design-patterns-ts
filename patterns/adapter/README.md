[작성 중]

# 어댑터 패턴(Adapter Pattern)

## 개념

### Head First 디자인 패턴

어댑터 패턴(Adapter Pattern)은 특정 클래스 인터페이스를 클라이언트에서 요구하는 다른 인터페이스로 변환합니다. 인터페이스가 호환되지 않아 같이 쓸 수 없었던 클래스를 사용할 수 있게 도와줍니다.

### GoF의 디자인 패턴

클래스의 인터페이스를 사용자가 기대하는 다른 인터페이스로 변환하는 패턴으로, 호환성이 없는 인터페이스 때문에 함께 동작할 수 없는 클래스들이 함께 작동하도록 해 줍니다.

### refactoring.guru

어댑터는 호환되지 않는 인터페이스를 가진 객체들이 협업할 수 있도록 하는 구조적 디자인 패턴입니다.

## 설명

어댑터는 객체 어댑터와 클래스 어댑터로 나눌 수 있다. 하지만 클래스 어댑터는 다중 상속을 지원하는 언어에서 사용되기 때문에 다루지 않는다.

사용되고 있던 기존 기능이나 외부 라이브러리가, 앞으로 적용해야 할 인터페이스와 호환되지 않을 경우, 중간에 변환기 역할을 하는 구상 어댑터 클래스를 두는 것이 목적이다.

### 객체 어댑터 패턴 구조

- 타깃 인터페이스(클라이언트 인터페이스): 다른 클래스와 클라이언트 코드가 따라야할 프로토콜을 인터페이스로 정의한 것이다.

- 어댑티(서비스, Adaptee): 서드파티 라이브러리 혹은 유용한 레거시 코드 등이 이에 해당된다, 클라이언트에서 사용해야하는 인터페이스와는 달라 호환되지 않아, 직접 클라이언트에서 사용할 수 없는 클래스다.

- 어댑터: 클라이언트에서 어댑티를 사용할 수 있도록 어댑티 객체를 래핑하여 타깃 인터페이스에 맞게 어댑티 내부 요소와 매핑해주는 역할을 하는 클래스. 결과적으로 클라이언트에서 참조하는 타깃 인터페이스를 통해 어댑티의 기능을 호출할 수 있도록
  연결해주는 것이다.

- 클라이언트: 타깃을 활용하는 코드, 타깃 인터페이스에만 의존한다. 클라이언트는 타깃 인터페이스를 통해서 작동하기 때문에 구상 어댑터 클래스에 대해 전혀 알지 못한다. 덕분에 클라이언트 코드를 수정하지 않은 채 어댑티의 교체나 구상 어탭터 클래스의 변경 등 유연성을 얻을 수 있다.

### 구현 방법

1. 호환되지 않는 인터페이스가 있는 클래스를 정리한다.

   1. 유용하지만 수정할 수 없는 서비스 클래스가 있는 경우. 이를 어댑티라 부르며, 주로 자사 레거시 기능이나 외부 라이브러리가 대상이 된다.
   2. 위 서비스를 사용해야하는 클라이언트를 찾는다.

2. 클라이언트에서 사용할 타깃 인터페이스(클라이언트 인터페이스)를 정의한다.

3. 타깃 인터페이스를 구현한 구상 어댑터 클래스를 작성한다.

   1. 구상 어댑터 클래스 내부에 어댑티(서비스) 값을 다루기 위한 참조 값을 선언한다. 주로 어댑터는 사용할 어댑티가 정해져있기 때문에 생성자를 통해 초기화하는 경우가 많다.
   2. 타깃 인터페이스에 맞추어 메소드를 구상 어댑터 클래스에 선언한 후, 실제 어댑티(서비스)에서 사용할 메소드를 타깃 인터페이스에서 선언한 메소드 내부에서 호출한다. 어댑터는 인터페이스를 맞추거나 데이터 포멧 변환에 관한 처리만 할 수 있으며, 실제 동작은 어댑티(서비스)에 위임해야 한다.

4. 클라이언트는 타깃 인터페이스를 통해 어댑터를 사용한다. 클라이언트 입장에서는 사용하는 객체가 어댑터인지 타깃인지 구분할 수 없으며, 어댑터와 명확하게 분리되기 때문에 개방/폐쇄 원칙을 지킬 수 있다.

### 장점

- 단일 책임 원칙, 서비스 로직에서 인터페이스 또는 데이터 변환 코드를 분리할 수 있다.

- 개방/폐쇄 원칙, 클라이언트 코드와 어댑터 코드가 서로 독립적으로 유지될 수 있다.

### 단점

- 새 인터페이스와 클래스가 도입되므로 전반적인 복잡도가 증가한다.
