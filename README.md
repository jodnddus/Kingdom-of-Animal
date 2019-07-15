# Kingdom-of-Animal


## 구현

### 이미지 로딩 관련
[medium에서 사용하는 로딩 방식](https://mygumi.tistory.com/296)을 적용하려 했지만. 용량이 매우 작은 이미지가 필요.

### 컴포넌트
* AnimalContainer
* Header
* List
* Item

### 인터페이스
~~~ 
interface Animal {
  _id: string;
  imageUrl: string;
  age: number;
  name: string;
  gender: string;
}
~~~

## 프로젝트 Setting
### CRA
npx create-react-app [프로젝트 이름] --typescript