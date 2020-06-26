import React, { memo, useCallback, useContext } from 'react';
import {
  CODE,
  OPEN_CELL,
  TableContext,
  FLAG_CELL,
  QUESTION_CELL,
  NORMALIZE_CELL,
  CLICK_MINE,
} from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.CLICKED_MINE:
    case CODE.OPPEND:
      return {
        background: 'white',
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: 'yellow',
      };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: 'red',
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
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';
    default:
      return code || '';
  }
};

const Td = ({ rowIndex, columnIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }

    switch (tableData[rowIndex][columnIndex]) {
      case CODE.OPPEND:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, column: columnIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, column: columnIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][columnIndex], halted]);

  const onRightClickTd = useCallback(
    (e) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][columnIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, column: columnIndex });
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          dispatch({ type: QUESTION_CELL, row: rowIndex, column: columnIndex });
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          dispatch({
            type: NORMALIZE_CELL,
            row: rowIndex,
            column: columnIndex,
          });
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][columnIndex], halted]
  );

  return (
    <td
      style={getTdStyle(tableData[rowIndex][columnIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(tableData[rowIndex][columnIndex])}
    </td>
  );
};

export default memo(Td);
