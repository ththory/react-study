-   props?
    -   jsx에 전달하는 정보
-   자식 컴포넌트에 props 전달하는 방법
    -   자식 컴포넌트에 일부 props 전달
    -   function의 인자값으로 {}로 감싼 값을 가져옴
    -   중괄호로 감싸지 않으면 첫번째 인자값으로 객체가 매핑됨 ⇒ 구조분해할당
        -   ex)
            function Avatar(person, size) 이면
            person에 {person, size} 인 객체가 반환됨
            size에는 빈 오브젝트 반환
-   prop 기본값 지정하는 방법
    -   prop 명 바로 뒤에 = 과 함께 기본값 넣음
-   prop 가 중복적으로 사용될 경우 간결화 하는 방법?
    -   spread 문법 적용
-   자식을 jsx로 전달하는 방법
    -   이미 정의되어있는 children prop 사용
-   사용자의 입력에 반응해야 하는 경우
    -   Props는 불변해야하기 때문에 변경 안됨
    -   새로운 객체를 받도록 요청하거나 state를 설정 (추후 학습)
