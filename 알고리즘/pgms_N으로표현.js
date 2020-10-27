function solution(N, number) {
    const numList = Array.from(Array(8), () => new Set());
    for (let i = 0; i < 8; i++) {
        numList[i].add(Number(String(N).repeat(i + 1)));

        for (let j = 0; j < i; j++) {
            for (const x1 of numList[j]) {
                for (const x2 of numList[i - j - 1]) {
                    numList[i].add(x1 * x2);
                    numList[i].add(x1 - x2);
                    numList[i].add(x1 + x2);
                    numList[i].add(x1 / x2);
                }
            }
        }
        if (numList[i].has(number)) return i;
    }
    return -1;
}
solution(5, 12);
