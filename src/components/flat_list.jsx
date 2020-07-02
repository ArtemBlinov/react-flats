import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(gif => <Flat id={Flat.id} key={Flat.id} selectFlat={props.selectFlat} />)}
    </div>
  );
};
export default FlatList;
