function solution(genres, plays) {
  var answer = [];

  // 장르, 재생횟수, 고유번호 담고있는 리스트 만들기
  var list = genres.map((v, i) => [v, plays[i], i]);

  // 장르별 카운트용 맵 생성
  var genreCount = new Map();

  //리스트 순회하면서 장르별로 재생횟수 더하기
  list.forEach((val) =>
    genreCount.has(val[0])
      ? genreCount.set(val[0], val[1] + genreCount.get(val[0]))
      : genreCount.set(val[0], val[1])
  );

  // 맵을 리스트로 펼쳐서 재생횟수 합산별로 정렬
  let sortedgenreCount = [...genreCount].sort((a, b) => b[1] - a[1]);

  for (let genre of sortedgenreCount) {
    list
      .filter((v) => v[0] === genre[0]) // sortedgenreCount 로 정렬되어 있는 장르 순서대로 리스트 필터
      .sort((a, b) => b[1] - a[1]) // 재생횟수 별로 정렬
      .splice(0, 2) // 가장 많은 2개 자르기
      .forEach((v) => answer.push(v[2])); // 정답에 고유번호 담기
  }

  return answer;
}

// 베스트앨범
// Map 을 이용한 카운트
// Array methods들 활용하여 해결
