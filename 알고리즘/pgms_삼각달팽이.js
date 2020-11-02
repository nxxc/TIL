function solution(n) {
    var answer = [];
    let num = 1;
    const map = Array.from(Array(n), (_, i) => Array(i + 1).fill(0));
    let top = 0;
    let left = 0;
    let right = n - 1;
    let bottom = n - 1;
    let counter = 0;
    while (top <= bottom && left <= right) {
        for (let i = top; i <= bottom; i++) {
            map[i][left] = num++;
        }
        top++;
        left++;
        for (let i = left; i <= right; i++) {
            map[bottom][i] = num++;
        }
        bottom--;
        right--;
        for (let i = bottom; i >= top; i--) {
            map[i][map[i].length - 1 - counter] = num++;
        }
        top++;
        right--;
        counter++;
    }
    return map.flat();
}
