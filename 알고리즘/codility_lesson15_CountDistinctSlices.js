function solution(M, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const check = Array(M + 1).fill(false);
  let right = 0;
  let count = 0;
  for (let left = 0; left < A.length; left++) {
    while (right < A.length && !check[A[right]]) {
      check[A[right]] = true;
      count += right - left + 1;
      if (count > 1000000000) return 1000000000;
      right++;
      console.log(check, left, right, count);
    }
    check[A[left]] = false;
  }
  //   console.log(count);
  return count;
}

// 숫자를 사용했는지 체크하는 used 배열만들기
// left right 포인트 옮겨가며 계산
// while 조건문 => 1. 값을 사용했다는 체크하고  2. 거리 더해주기 3. right 오른쪽으로 이동
// while문에서 나오면 A[left]에 사용한 값을 false로 체크하면서 오른쪽으로 이동

// solution(6, [3, 4, 5, 5, 2]);
solution(6, [3, 4, 5, 3, 2]);
