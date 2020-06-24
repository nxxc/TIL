import React from 'react';
import Td from './Td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((_, i) => (
          <Td
            cellIndex={i}
            rowIndex={rowIndex}
            dispatch={dispatch}
            cellData={rowData[i]}
          />
        ))}
    </tr>
  );
};

export default Tr;
