## Coponent Life Cycle

<img src="https://raw.githubusercontent.com/kkokey/TIL/master/docs/react-native/component-life-cycle.png" width="" height=""></img>

#### constructor
- 이 메소드는 컴포넌트가 생성될 때 실행됩니다.
- constructor는 컴포넌트가 생성될 때 기본 필드와 데이터들을 초기화 합니다.
- 여기서 `this.setState()` 는 호출하지 마십시오.
- `super(props)`가 실행되면 `this.props` 를 사용 할 수 있게 됩니다.

##### code example
```bash
constructor(props) {
  super(props);
  this.state = {
    refreshing: false,
  };
}
```

#### static getDerivedStateFromProps()
-> 이 메소드가 호출되면 새로운 props 정보를 받아오게 됩니다.
-> 아래 예제와 같은 형태로 `state` 의 값을 변경하게 됩니다.

##### code example
```bash
static getDerivedStateFromProps(nextProps, prevState) {
  if (prevState.data.length > nextProps.length
    return {
      counter: nextProps.maxCount
    };
  }
  return null;
}
```

##### 출처 : https://grokonez.com/frontend/react/react-component-lifecycle-methods-from-v16-3-react-lifecycle-example
