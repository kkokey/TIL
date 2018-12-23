# Template Literal

## 템플릿 리터럴이란?
- ES6에서 처음 소개되었으며, string을 만들어내는 하나의 방법이다.

## Usage

### basic
```
let newString = `A string`;
```

### Multi-line

```
// The old way
var myMultiString = 'Some text that I want\nOn two lines!';
```

```
// The new way.
var myMultiString= `This will be
on two lines!`;
```

---
아래와 같은 문법을 사용한 방법도 있다.

### Expressions
```
let name = `Ryan`;

console.log(`Hi my name is ${name}`);
```

내부 계산식도 지원
```
let price = 19.99;
let tax = 1.13;

let total = `The total prices is ${price * tax}`;
```


추가중...

Source: https://css-tricks.com/template-literals/
