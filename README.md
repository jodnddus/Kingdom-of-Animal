# Kingdom-of-Animal

## 구현
### 이미지 로딩 관련
* [medium에서 사용하는 로딩 방식](https://mygumi.tistory.com/296)을 적용하려 했지만. 용량이 매우 작은 이미지가 필요.<br>
* 크롬에서는 자동으로 이미지를 캐싱한다는 것을 알아냄.

> 2019.08.18<br>
인스타그램의 페이지를 연구하던 중,<br>
사용자에게 보이는 뷰 포트에 나오는 게시물의 위, 아래로 2개 정도만 미리 로딩하고, 나머지는 로딩 하지 않는 방식을 알아냈음.

> 2019.08.19<br>
리액트에서 지연로딩할 때 쓸만한 라이브러리를 찾아서 적용시킴.<br>
지연로딩을 사용하지 않았을 때와 비교하면 첫 로딩이 3~5초정도 빨라진게 느껴진다.

### 컴포넌트 구조
* AnimalContainer: 데이터와 이벤트 함수들이 모여 있는 곳. 데이터가 필요한 컴포넌트에 Props를 통해서 전달이 됨.
  * Header: 고양이버튼과 강아지버튼, 페이지 이름이 표현되는 컴포넌트.
  * List: Item의 집합으로 이루어진 컴포넌트. map함수를 이용해서 손쉽게 렌더링 성공.
  * Item: 각각의 데이터를 표현하기 위한 컴포넌트. 재사용성을 위해서 만들어짐.

### Semantic UI React
Semantic UI React의 [Tab](https://react.semantic-ui.com/modules/tab/)을 이용해서 구현하려 했지만, 직접 만드는 것이 편할것 같아 직접 구현하게 되었음.

### Sticky Header
구현해본 경험이 없는 디자인이였지만, [fixed(고정위치)](https://poiemaweb.com/css3-position)를 이용한다면 손쉽게 구현할수 있다는것을 검색을 통해서 알아냄.

### Responsive UI
미디어 쿼리를 이용해서 650px, 425px, 320px, 이하일 때 반영되는 코드를 짬.

### API 호출
* axios 사용.
* /dog와 /cat 두가지 엔드포인트에 호출을 함.
* 강아지, 고양이 데이터를 받은 후 두 값을 동시에 리턴.

### API 서버
* express.js 사용.
* 단순하게 /dog, /cat 으로 들어오는 요청에 대해 라우팅을 함.
* 성공적으로 요청이 된다면, 200코드와 json데이터를 보냄.

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
> npx create-react-app [프로젝트 이름] --typescript
### express
> express [프로젝트 이름]