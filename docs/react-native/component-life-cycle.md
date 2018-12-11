## Coponent Life Cycle

<img src="https://raw.githubusercontent.com/kkokey/TIL/master/docs/react-native/component-life-cycle.png" width="" height=""></img>

#### constructor
-> super(props)를 사용해 이전 component나 navigator 등의 메소드를 얻어옵니다.

##### code example
```bash
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
```


##### 출처 : https://grokonez.com/frontend/react/react-component-lifecycle-methods-from-v16-3-react-lifecycle-example
