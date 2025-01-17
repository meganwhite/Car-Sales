import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {() => {
        props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}(+ {props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { removeFeature }
)(AddedFeature);
