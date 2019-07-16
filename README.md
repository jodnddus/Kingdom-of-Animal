# Kingdom-of-Animal

## 구현
### 이미지 로딩 관련
* [medium에서 사용하는 로딩 방식](https://mygumi.tistory.com/296)을 적용하려 했지만. 용량이 매우 작은 이미지가 필요.<br>
* 크롬에서는 자동으로 이미지를 캐싱한다는 것을 알아냄.

### 컴포넌트 구조
* AnimalContainer: 데이터와 이벤트 함수들이 모여 있는 곳. 필요한 컴포넌트에 Props를 통해서 전달이 됨.
  * Header: 고양이버튼과 강아지버튼, 페이지 이름이 표현되는 컴포넌트.
  * List: Item의 집합으로 이루어진 컴포넌트. map함수를 이용해서 손쉽게 렌더링 성공.
  * Item: 각각의 데이터를 표현하기 위한 컴포넌트. 재사용성을 위해서 만들어짐.

### Semantic UI React
Semantic UI React의 [Tab](https://react.semantic-ui.com/modules/tab/)을 이용해서 구현하려 했지만, 직접 만드는 것이 편할것 같아 직접 구현하게 되었음.

### Sticky Header
구현해본 경험이 없는 디자인이기에 당혹스러웠지만, [fixed(고정위치)](https://poiemaweb.com/css3-position)를 이용한다면 손쉽게 구현할수 있다는것을 검색을 통해서 알아냄.

### Responsive UI
미디어 쿼리를 이용해서 650px, 425px, 320px, 이하일 때 반영되는 코드를 짬.

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