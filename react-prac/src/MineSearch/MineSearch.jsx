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
  halted: false,
};

export const TableContext = createContext({
  tableData: [],
  halted: true,
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
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      console.log('dispatch');
      return {
        ...state,
        tableData: plantMine(action.row, action.column, action.mine),
        halted: false,
      };
    case OPEN_CELL:
      const tableData = [...state.tableData];
      tableData.forEach((row, i) => {
        tableData[i] = [...state.tableData[i]];
      });
      const checked = [];
      const checkArround = (row, column) => {
        if (
          [
            CODE.OPPEND,
            CODE.FLAG_MINE,
            CODE.FLAG,
            CODE.QUESTION,
            CODE.QUESTION_MINE,
          ].includes(tableData[row][column])
        ) {
          return;
        }
        if (
          row < 0 ||
          row >= tableData.length ||
          column < 0 ||
          column >= tableData[0].length
        ) {
          return;
        }
        if (checked.includes(row + ',' + column)) {
          return;
        } else {
          checked.push(row + ',' + column);
        }
        let arround = [];
        if (tableData[row - 1]) {
          arround = arround.concat(
            tableData[row - 1][column - 1],
            tableData[row - 1][column],
            tableData[row - 1][column + 1]
          );
        }
        arround = arround.concat(
          tableData[row][column - 1],
          tableData[row][column + 1]
        );
        if (tableData[row + 1]) {
          arround = arround.concat(
            tableData[row + 1][column - 1],
            tableData[row + 1][column],
            tableData[row + 1][column + 1]
          );
        }
        const count = arround.filter((v) =>
          [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
        ).length;

        tableData[row][column] = count;
        console.log(arround, count);
        if (count === 0) {
          const near = [];
          if (row - 1 > -1) {
            near.push([row - 1, column - 1]);
            near.push([row - 1, column]);
            near.push([row - 1, column + 1]);
          }
          near.push([row, column - 1]);
          near.push([row, column + 1]);
          if (row + 1 > tableData.length) {
            near.push([row + 1, column - 1]);
            near.push([row + 1, column]);
            near.push([row + 1, column + 1]);
          }
          near.forEach((n) => {
            if (tableData[n[0]][n[1]] !== CODE.OPPEND) {
              checkArround(n[0], n[1]);
            }
          });
        } else {
        }
      };
      checkArround(action.row, action.column);
      return {
        ...state,
        tableData,
      };
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.column] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.column] === CODE.MINE) {
        tableData[action.row][action.column] = CODE.FLAG_MINE;
      } else {
        tableData[action.row][action.column] = CODE.FLAG;
      }
      return {
        ...state,
        tableData,
        halted: false,
      };
    }
    case QUESTION_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.column] === CODE.FLAG_MINE) {
        tableData[action.row][action.column] = CODE.QUESTION_MINE;
      } else {
        tableData[action.row][action.column] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData,
        halted: false,
      };
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.column] === CODE.QUESTION_MINE) {
        tableData[action.row][action.column] = CODE.MINE;
      } else {
        tableData[action.row][action.column] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initiaiState);
  const { tableData, halted, timer, result } = state;
  const value = useMemo(() => ({ tableData, halted, dispatch }), [
    tableData,
    halted,
  ]);
  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;
