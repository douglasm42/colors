import React from 'react';
import Button from './Button';

function OpenPlanets(props) {
  return (
    <Button onClick={props.handleOpenPlanets}>
      <i class="fa fa-circle" aria-hidden="true"></i>
    </Button>
  );
}

export default OpenPlanets;
