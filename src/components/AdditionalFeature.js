import React from 'react';
import { buyItem } from '../actions';
import { connect } from 'react-redux';


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={props.buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {
  return {
    titleOnProps: state.title,
    editing: state.editing
  };
};

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeature);
