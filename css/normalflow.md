# CSS Normal Flow

고정된 숫자는 변화하는 환경에 적응하지 못함

%, Left, Block, Inline, Float 등 → 하나의 함수로 보자!

> 렌더링?

: 내가 원하는 모습으로 변환

**CSS는 Geometry Calculate 후 Fragment Fill !**

: 요소별 위치를 정하고 그 다음 화면에 그림을 그린다

## Normal Flow (Position static, relative)

BFC : Block Formatting Context   |  IFC: Inline Formatting Context  |  Relative Positioning

> BFC : 부모의 가로길이 만큼 다 먹음  (x = 0 , y = 부모의 width)

2번째 Block의 y값은 첫번째 Block의 height


> IFC : 나의 컨텐츠 만큼 크기 먹음

Inline 요소들의 width의 합이 부모의 width를 넘어가면 아랫줄로 넘어감 가장 큰 height만큼 밑으로

base-line : 가장 큰 height 요소 기준으로 위 아래 정렬

> Position : Relative

일단 static으로 그리고 그 다음 이동

relative static 요소가 섞여있으면 relative적용된 요소가 앞으로 옴