import React, { memo } from 'react';
import './Lcss.css';

const Ball = ({ number }) => {
  const div = Math.floor(number / 10);
  // console.log(div);
  let background;
  switch (div) {
    case 0:
      background = 'red';
      break;
    case 1:
      background = 'orange';
      break;
    case 2:
      background = 'yellow';
      break;
    case 3:
      background = 'blue';
      break;
    case 4:
      background = 'green';
      break;
    default:
      return;
  }
  return (
    <div className="number" style={{ background }}>
      {number}
    </div>
  );
};

export default memo(Ball);
