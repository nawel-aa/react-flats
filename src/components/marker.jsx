import React from 'react';

const Marker = ({ flat }) => {
  if (flat === "") {
    return null;
  }
  return <div className="marker" />;
};

export default Marker;
