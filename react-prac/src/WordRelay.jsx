import React, { useState, useRef } from 'react';

function WordRelay(props) {
  console.log(props)
  const [word, setWord] = useState('구구단');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const _onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };
  const _onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={_onSubmit}>
        <input ref={inputRef} value={value} onChange={_onChange}></input>
        <button>제출</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRelay;
