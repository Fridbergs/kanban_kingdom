import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <div
      style={{ textAlign: 'center' }}
      className='deleteBtn'
      onClick={(e) => onClick(e.preventDefault())}
    >
      &times;
    </div>
  );
};

export default DeleteButton;
