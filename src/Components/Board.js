import React from 'react'
import Cell from './Cell'
import { StyledBoard } from './styled/styled'


const Board = ({ cells, width, height, onClick, winningCoordinates, disabled }) => {
  const square = cells.map((cellRow, i) => {
    return (
      cellRow.map((cell, k) => {
        let winner = false
        if (winningCoordinates) {
          winningCoordinates.forEach((row) => {
            if (row[0] === i && row[1] === k) {
              winner = true
            }
          })
        }
        return (
          <Cell key={k} width={width} value={cell} onClick={() => onClick(i, k)} winner={winner} disabled={disabled}/>
        )
      }
      )
    )
  }
  )

  return (
    <StyledBoard width={width} height={height}  >
      {square}
    </StyledBoard>
  )
}
export default Board