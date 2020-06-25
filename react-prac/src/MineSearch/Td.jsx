import React, { useContext, memo } from 'react';
import { TableContext, CODE, OPEN_CELL } from './MineSearch';
import { useCallback } from 'react';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.OPPEND:
      return {
        background: 'white',
      };
    default:
      return {
        background: 'white',
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    default:
      return '';
  }
};

const Td = ({ rowIndex, columnIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    dispatch({ type: OPEN_CELL, row: rowIndex, column: columnIndex });
  }, []);
  return (
    <td
      style={getTdStyle(tableData[rowIndex][columnIndex])}
      onClick={onClickTd}
    >
      {getTdText(tableData[rowIndex][columnIndex])}
    </td>
  );
};

export default memo(Td);
