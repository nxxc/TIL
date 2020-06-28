## POST PROCESS

cpu가 geometry , fragment 그리고 그다음 gpu 가 post process 처리

css에서 3d 관련된 속성은 모두 gpu 가 처리

- perspective : 화면과 나의 거리, 커질수록 작아지고 작을수록 커짐 원근감
- perspective - orgin : 요소의 어디를 바라보는지
- transform - style : preserve -3d ⇒ 자식까지 3d효과
- transform - origin : 어디를 기준으로 변형을 시킬지
- backface - visibility:

## SEMANTIC WEB

DOM : 의미를 갖도록 태깅

CSS SELECTOR : DOM의 구조에 밀접하게 선택

CSS : 의미와 무관한 스타일

1. DOM을 스타일에 맞춰 제작
2. 태그의 변화가 스타일을 깨먹음

⇒유지보수 불가능한 HTML과 CSS

⇒SEMANTIC SELECTOR 로 해결

### CSS ATTRIBUTE SELECTOR

- [attr] - 속성이 존재함
- [attr = val] - 값과 일치
- [attr~=val] -공백으로 구분된 단어로 포함되면 일치
- [attr |= val] - 일치하거나 뒤에 -가 붙을때
- [attr *= val] -값이 포함될때
- [attr ^= val] - 값으로 시작할 때
- [attr $= val] - 값으로 끝날 때
- [(ex) i] -대 소문 구분 안함

## HTML5 MICRODATA

- itemscope - 적용범위 설정
- itemtype - 스키마 설정
- itemid - 특정 id부여
- itemprop - 속성명
- content - 비 가시적일 때 값을 설정
- value - 가시적인 값이 원하는 값이 아닐 때
- itemref - scope 계층구조 안에 없을 때

## HTML5 DATASET

- data- 를 앞에 붙이면 커스텀 attribute 추가 가능
- 자바스크립트에선 저절로 camelCase로 전환

## DISPLAY

css display module level3

### DISPLAY GROUP

- OUTSIDE
- INSIDE
- LISTITEM
- INTERNAL
- BOX
- LEGACY

### OUTSIDE (normal flow)

BLOCK | INLINE | RUN-IN

### LISTITEM

LIST-ITEM

### BOX

CONTENTS | NONE

### INSIDE

FLOW | FLOW-ROOT | TABLE | FLEX | GRID | SUBGRID | RUBY

### LEGACY

INLINE-BLOCK | INLINE-TABLE | INLINE-FLEX | INLINE-GRID

### INTERNAL

TABLE - ROW -GROUP | TABLE - HEADER - GROUP | TABLE - FOOTER-GROUP

TABLE - ROW | TABLE - CELL | TABLE-COLUMN-GROUP | TABLE - COLUMN

RUBY -BASE | RUBY - TEXT | RUBY - BASE - CONTAINER | RUBY - TEXT- CONTAINER

## FLEXBOX

CSS FLEXIBLE BOX LAYOUT MODULE
