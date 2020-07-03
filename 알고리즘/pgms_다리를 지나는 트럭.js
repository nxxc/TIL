const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let bridge_weight = 0;
  let bridge = Array(bridge_length).fill(0); //다리 길이만큼 배열 만들기
  let first = truck_weights.shift();

  // 처음 1초
  bridge.unshift(first);
  bridge.pop();
  bridge_weight += first;
  count++;

  // 무게 합쳐서 적으면 트럭 빼서 추가하고 한칸씩 이동
  // 무게 초과하면 0 추가해서 한칸씩 이동
  while (bridge_weight > 0) {
    let bridge_last = bridge.pop();
    bridge_weight -= bridge_last;
    if (bridge_weight + truck_weights[0] <= weight) {
      bridge_weight += truck_weights[0];
      bridge.unshift(truck_weights.shift());
      count++;
    } else {
      count++;
      bridge.unshift(0);
    }
  }

  return count;
}

solution(bridge_length, weight, truck_weights);

// 다리를 지나는 트럭 v1
// 한칸씩 이동으로 해결
