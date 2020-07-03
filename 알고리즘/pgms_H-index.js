function solution(citations) {
  let list = citations.sort((a, b) => a - b);
  for (let li in list) {
    if (list[li] >= list.length - li) {
      return list.length - li;
    }
  }
  return 0;
}

// H-index
