import React from 'react';

const DeleteButton = ({ onClick }) => {
  return <div onClick={(e) => onClick(e.preventDefault())}>x</div>;
};

export default DeleteButton;
