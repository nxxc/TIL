function solution(n, lost, reserve) {
  let students = Array(n).fill(1);

  lost.forEach((v) => (students[v - 1] = students[v - 1] - 1));
  reserve.forEach((v) => (students[v - 1] = students[v - 1] + 1));
  console.log(students);
  students.forEach((v, i) => {
    if (v == 0 && students[i - 1] === 2) {
      students[i - 1] = 1;
      students[i] = 1;
    } else if (v == 0 && students[i + 1] === 2) {
      students[i + 1] = 1;
      students[i] = 1;
    }
  });
  console.log(students);
  var answer = students.filter((v) => v >= 1).length;
  return answer;
}
// 모든학생들이 하나씩 가지고 있다고 배열 만들기
// 잃어버린 학생들 인덱스 별로 -1
// 여벌은 +1
// 0인 인덱스 앞뒤로 2이면 감소
// students 배열에서 1이상인 원소들 찾아서 길이구하기
