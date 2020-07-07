function solution(skill, skill_trees) {
  var answer = 0;
  let new_skill_trees = skill_trees.map((v) =>
    [...v].filter((v2) => skill.includes(v2)).join('')
  );
  new_skill_trees.forEach((skill_tree) =>
    skill.startsWith(skill_tree) ? (answer += 1) : null
  );
  return answer;
}
