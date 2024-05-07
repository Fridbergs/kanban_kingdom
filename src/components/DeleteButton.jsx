import React from 'react';

const DeleteButton = ({ onClick }) => {
  return <div className='deleteBtn' onClick={(e) => onClick(e.preventDefault())}>x</div>;
};

export default DeleteButton;
