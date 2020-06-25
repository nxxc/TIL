import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';
import './styles.css';

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPPEND: 0,
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initiaiState = {
  tableData: [],
  timer: 0,
  result: '',
};

const plantMine = (row, column, mine) => {
  console.log(row, column, mine);
  const candidate = Array(row * column)
    .fill()
    .map((_, i) => i);
  const shuffle = [];
  while (candidate.length > row * column - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < column; j++) {
      rowData.push(CODE.NORMAL);
    }
  }
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / column);
    const hor = shuffle[k] % column;
    data[ver][hor] = CODE.MINE;
  }
  console.log(data);
  return data;
};

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      console.log('dispatch');
      return {
        ...state,
        tableData: plantMine(action.row, action.column, action.mine),
      };
    case OPEN_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.column] = CODE.OPPEND;
      return {
        ...state,
        tableData,
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initiaiState);
  const value = useMemo(
    () => ({
      tableData: state.tableData,
      dispatch,
    }),
    [state.tableData]
  );
  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;
