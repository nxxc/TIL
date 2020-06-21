import React, { useState, useRef } from 'react';

function Gugudan(props) {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [prev, setPrev] = useState(value);
  const [result, setResult] = useState('??');
  const inputRef = useRef(null);

  const _onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('정답 : ');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setPrev(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡!! ');
      setPrev('');
      setValue('');
      inputRef.current.focus();
    }
  };
  const _onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first}곱하기{second}
      </div>
      <form onSubmit={_onSubmit}>
        <input ref={inputRef} value={value} onChange={_onChange}></input>
        <button>제출</button>
      </form>
      <div>
        {result}
        {prev}
      </div>
    </>
  );
}

export default Gugudan;
