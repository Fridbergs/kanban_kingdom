import React from 'react'
import Column from '../Column/Column';
import "./Listview.css";


const ListviewPage = ({ board, handleOpenModal }) => {
  const columns = board.columns;
  const stories = columns.flatMap(column => column.stories); // Flatten stories into one array

  return (
    <div className='listview-div' style={{ display: "flex", flexGrow: "1", maxHeight: "100%", marginTop: "3rem" }}>
      <h2>Listpage</h2>
      {board.columns.map((column) => (
            <Column
              handleOpenModal={handleOpenModal}
              key={column.id}
              stories={column.stories}
              board={board}
              columns={board.columns}
              column={column}
            />
          ))}
    </div>
  )
}

export default ListviewPage
