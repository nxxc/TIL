import React, { useContext, memo } from 'react';
import Td from './Td';
import { TableContext } from './MineSearch';

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((_, i) => <Td rowIndex={rowIndex} columnIndex={i} />)}
    </tr>
  );
};

export default memo(Tr);
