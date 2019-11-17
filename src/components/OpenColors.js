import React from 'react';
import Button from './Button';

function OpenColors(props) {
  return (
    <Button onClick={props.handleOpenColors}>
      <i class="fa fa-circle" aria-hidden="true"></i>
    </Button>
  );
}

export default OpenColors;
