function solution(a) {
    let answer = 0;
    let lmin = Infinity;
    let rmin = Infinity;
    for (let i = 0; i < a.length; i++) {
        const lNum = a[i];
        const rNum = a[a.length - i - 1];
        if (lNum < lmin) {
            answer++;
            lmin = lNum;
        }
        if (rNum < rmin) {
            answer++;
            rmin = rNum;
        }
    }
    return answer - 1;
}
