import React from 'react';
import Button from './Button';

function Next(props) {
  return (
    <Button onClick={props.handleNext}>
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </Button>
  );
}

export default Next;
