import React, { PureComponent } from 'react';

class Check extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };
  timeOut;
  startTime;
  endTime;
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '클릭하세요',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (state === 'ready') {
      //성급하게 클릭

      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요!',
      });
      clearTimeout(this.timout);
    } else if (state === 'now') {
      //반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          result: [...prevState.result, this.endTime - this.startTime],
          message: '클릭해서 시작하세요',
        };
      });
    }
  };

  renderAverage = () => {
    return this.state.result.length === 0 ? null : (
      <div>
        {`평균시간 : ${
          this.state.result.reduce((a, b) => a + b) / this.state.result.length
        }ms`}
      </div>
    );
  };

  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default Check;
