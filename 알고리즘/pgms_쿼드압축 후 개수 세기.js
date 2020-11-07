function solution(arr) {
    let answer = [0, 0];
    function check(array) {
        array = array.flat();
        if (array.every((v) => v === 1)) {
            answer[1] += 1;
            return true;
        }
        if (array.every((v) => v === 0)) {
            answer[0] += 1;
            return true;
        }
        return false;
    }
    function divide(array) {
        if (!check(array)) {
            const halfL = array.length / 2;
            const sample = Array.from(Array(halfL), () => Array(halfL).fill(0));
            let arr1 = sample.map((v1, i) => v1.map((v2, j) => array[i][j]));
            let arr2 = sample.map((v1, i) =>
                v1.map((v2, j) => array[i][j + halfL])
            );
            let arr3 = sample.map((v1, i) =>
                v1.map((v2, j) => array[i + halfL][j])
            );
            let arr4 = sample.map((v1, i) =>
                v1.map((v2, j) => array[i + halfL][j + halfL])
            );
            divide(arr1);
            divide(arr2);
            divide(arr3);
            divide(arr4);
        }
    }
    divide(arr);
    return answer;
}
