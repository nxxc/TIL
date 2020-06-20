# 📦Box Model 📦

![boxmodel](img/boxmodel.png)

- Margin
- Border-Box
- Padding-Box
- Content-Box

추가로

- Box-shadow : 기본적으로 border 바깥쪽에 그려짐, inset 지정 시 padding 쪽에 그려짐
  - Border-Box 까지 Background-Color가 채워짐
  - Geometry엔 영향 x 그림만 그려짐
  - 바깥 쪽 부터 설계 (겹쳐져서 그려짐)
- Outline : Box-shadow 랑 같은 위치

---

# Position

caretpostion & Offset
offset -> 부를 때 마다 재계산 (조회전용)

### Offset parent

1. Null
   - Root, HTML, Body
   - position : fixed
   - Out of DOM tree

2) Recursive Search
   - Parent.position : fixed = null
   - Parent.position : !static = OK (absolute or relative)
   - Body = OK
   - TD,TH, Table = OK

### Position - absolute

: 기본적은로 static 기준, 값을 주면 offset parent기준으로 그려짐

> static 요소 안에 absolute?
> : 부모에 position relative적용하면 됨
