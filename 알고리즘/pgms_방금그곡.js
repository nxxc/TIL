function solution(m, musicinfos) {
  var answer = '';
  function getTime(s, e) {
    let sTime = s.split(':');
    let eTime = e.split(':');
    let time =
      parseInt(eTime[0]) * 60 +
      parseInt(eTime[1]) -
      (parseInt(sTime[0]) * 60 + parseInt(sTime[1]));
    return time;
  }
  let data = musicinfos.map((v, i) => {
    let music = v.split(',');
    let name = music[2];
    let time = getTime(music[0], music[1]);
    let code =
      time / music[3].length > 1
        ? music[3].repeat(Math.ceil(time / music[3].length))
        : music[3];
    code = code.slice(0, time);
    return {
      Index: i,
      Name: name,
      Time: time,
      Code: code,
    };
  });
  let temp = data.filter(
    (v) => v.Code.includes(m) && !v.Code.includes(m + '#')
  );
  if (temp.legnth === 0) {
    return '`(None)`';
  } else if (temp.length === 1) {
    return temp[0].Name;
  } else if (temp.legnth > 1) {
    temp.sort((a, b) => b.Time - a.Time);
    return temp[0].Name;
  }
  console.log(temp);
}
