import React, { useEffect, useState, useRef } from 'react';
import Ball from './Ball';
import { useMemo } from 'react';

const getNumbers = () => {
  console.log('i am getNumbers');
  let numArr = Array(45)
    .fill()
    .map((_, i) => i + 1);
  let shuffle = [];
  while (numArr.length > 0) {
    shuffle.push(
      numArr.splice(Math.floor(Math.random() * numArr.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
  return [...winNumbers, bonusNumber];
};
const Lotto = () => {
  const lottoNumbers = useMemo(() => getNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const onClickRedo = () => {
    setWinNumbers(getNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  useEffect(() => {
    console.log(winNumbers);
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  }, [winNumbers]);
  return (
    <>
      <div>당첨숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v}></Ball>
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus}></Ball>}
      {redo && <button onClick={onClickRedo}>한번더!</button>}
    </>
  );
};

export default Lotto;
