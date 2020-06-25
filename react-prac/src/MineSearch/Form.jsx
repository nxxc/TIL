import React, { useState, useCallback, useContext } from 'react';
import { TableContext, START_GAME } from './MineSearch';

const Form = () => {
  const [row, setRow] = useState(10);
  const [column, setColumn] = useState(10);
  const [mine, setMine] = useState(20);

  const { dispatch } = useContext(TableContext);

  const onClickRow = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRow(parseInt(e.target.value));
  }, []);
  const onClickColumn = useCallback((e) => {
    e.preventDefault();
    setColumn(parseInt(e.target.value));
  }, []);
  const onClickMine = useCallback((e) => {
    e.preventDefault();
    setMine(parseInt(e.target.value));
  }, []);

  const onClickBtn = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: START_GAME, row, column, mine });
    },
    [row, column, mine]
  );

  return (
    <div>
      <input
        type='number'
        placeholder='가로'
        value={row}
        onChange={onClickRow}
      ></input>
      <input
        type='number'
        placeholder='세로'
        value={column}
        onChange={onClickColumn}
      ></input>
      <input
        type='number'
        placeholder='지뢰'
        value={mine}
        onChange={onClickMine}
      ></input>
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
};
export default Form;
