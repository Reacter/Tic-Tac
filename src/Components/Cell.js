import React from 'react'
import {StyledButton} from './styled/styled'


const Cell = ({ value, onClick, winner, disabled, width }) => {
    return (
        <StyledButton width={width} value={value} onClick={onClick} winner={winner} disabled={disabled}>
            <p>{value}</p>
        </StyledButton>
    )
}

export default Cell