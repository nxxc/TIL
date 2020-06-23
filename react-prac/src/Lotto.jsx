import React, { Component } from 'react';
import Ball from './Ball';

const getNumbers = () => {
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

export class Lotto extends Component {
  state = {
    winNumbers: getNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  };
  timeouts = [];

  runTimeOuts = () => {
    const { winNumbers } = this.state;
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000);
  };

  componentDidMount() {
    this.runTimeOuts();
  }

  componentWillMount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.winBalls.length === 0) {
      this.runTimeOuts();
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };
  render() {
    const { winBalls, bonus, redo } = this.state;
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
        {redo && <button onClick={this.onClickRedo}>한번더!</button>}
      </>
    );
  }
}
export default Lotto;
