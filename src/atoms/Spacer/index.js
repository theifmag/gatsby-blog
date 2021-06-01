import React from 'react';

const Spacer = ({x, y, basis, ...restProps}) => {
  return <div style={{width: x + 'px', height: y + 'px'}} {...restProps} />;
};

export default Spacer;
