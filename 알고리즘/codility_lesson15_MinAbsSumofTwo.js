function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  let left = 0;
  let right = A.length - 1;
  let min = 10000000000;
  while (left <= right) {
    let temp = A[left] + A[right];
    min = Math.min(min, Math.abs(temp));
    if (temp < 0) {
      left++;
    } else {
      right--;
    }
  }
  return min;
}
//정렬해서 양쪽 끝에서부터 비교
//합이 0보다 작으면 왼쪽 포인터를 옮겨서 절대값이 줄어들게함
//합이 0보다 크면 오른쪽 포인터를 옮겨서 절대값이 줄어들게함
