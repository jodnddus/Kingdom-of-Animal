# Kingdom-of-Animal

## 구현
### 이미지 로딩 관련
* [medium에서 사용하는 로딩 방식](https://mygumi.tistory.com/296)을 적용하려 했지만. 용량이 매우 작은 이미지가 필요.<br>
* 크롬에서는 자동으로 이미지를 캐싱한다는 것을 알아냄.

### 컴포넌트 구조
* AnimalContainer
  * Header: 고양이버튼과 강아지버튼, 페이지 이름이 표현되는 컴포넌트.
  * List: Item의 집합으로 이루어진 컴포넌트. map함수를 이용해서 손쉽게 렌더링 성공.
  * Item: 각각의 데이터를 표현하기 위한 컴포넌트. 재사용성을 위해서 만들어짐.

### 인터페이스
~~~ javascript
interface Animal {
  _id: string;
  imageUrl: string;
  age: number;
  name: string;
  gender: string;
}
~~~

## 프로젝트 Setting
### CRA [Typescript.Ver]
npx create-react-app [프로젝트 이름] --typescript