import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (<Flat flat={flat} key={flat.imageUrl} selectFlat={selectFlat} selected={selectedFlat.imageUrl === flat.imageUrl} />);
      })}
    </div>
  );
}

export default FlatList;
