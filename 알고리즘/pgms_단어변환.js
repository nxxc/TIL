// 단어 비교해서 차이가 하나면 바꿀수 있는단어 아니면 아닌단어를 판단하는 함수
function diff(s, str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (s[i] !== str[i]) cnt++;
  }
  return cnt === 1 ? true : false;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // words 안에 target이 없으면 0 리턴

  const answer = [];
  const used = []; // 사용한 단어들 넣을 리스트
  const step = 0; // 몇 단계인지 카운트

  function bfs(start, end, step, used, wordList) {
    if (start === end) return answer.push(step); // 단어변환이 끝났다면 저장한 step을 answer 저장

    step += 1; // 스텝 카운트

    const candidates = wordList.filter(
      // 다음으로 변환될 수 있는 단어들 후보
      (word) => !used.includes(word) && diff(start, word) // 조건은 사용하지 않고
    );

    if (candidates.length) {
      //후보가 있다면 실행
      candidates.forEach((candidate) => used.push(candidate)); //후보들 사용했다는 체크
      candidates.forEach((candidate) => {
        //후보들 각각 다시 재귀적으로 수행
        bfs(candidate, end, step, used, wordList);
      });
    }
  }

  bfs(begin, target, step, used, words);

  return answer[0];
}
