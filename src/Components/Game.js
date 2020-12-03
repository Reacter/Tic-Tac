import React, { useState, useEffect } from 'react'
import Board from './Board'
import { calculateWinner } from './Helper'
import { StyledResult, StyledRematchBtn,InfoWrapper,StyledDiv } from './styled/styled'

const Game = ({ width, height, startAgain, winningCondition }) => {
    const [cells, setCells] = useState([[]])
    const [xIsNext, setXIsNext] = useState(true)
    const [moveNumber, setMoveNumber] = useState(0)
    const [winningCoordinates, setWinningCoordinates] = useState([[]])
    const [result, setResult] = useState('')
    const xO = xIsNext ? 'X' : 'O'

    const clickHandler = (i, k) => {
        const board = [...cells]
        if (board[i][k])
            return
        board[i] = [...board[i]]
        board[i][k] = xO
        setCells(board)
        setXIsNext(prev => !prev)
        setMoveNumber(prevMoveNumber => prevMoveNumber + 1)
        const boardInfo = {
            board,i,k,moveNumber,winningCondition
        }
        const winner = calculateWinner(boardInfo)
        if (moveNumber + 1 === width * height && !winner) {
            setResult('Draw')
        }
        else if (winner) {
            const finalResult = winner.winner + ' won'
            setWinningCoordinates(winner.winningCoordinates)
            setResult(finalResult)
        }
    }
    
    const createBoard = (width,height) =>{
        let board = []
        for (let i = 0; i < height; i++) {
            board.push([]);
        }
        for (let i = 0; i < height; i++) {
            for (let k = 0; k < width; k++) {
                board[i][k] = null
            }
        }
        return board
    }

    useEffect(() => {
        const board = createBoard(width,height)
        setCells(board)
    }, [width, height])

    return (
        <StyledDiv>
            <Board
                cells={cells}
                disabled={result.length > 0 ? true : false}
                onClick={clickHandler}
                width={width} height={height}
                winningCoordinates={winningCoordinates}
            />
            {result.length > 0 ? (
                <InfoWrapper>
                    <StyledResult >{result}</StyledResult>
                    <StyledRematchBtn onClick={startAgain}> Rematch</StyledRematchBtn>
                </InfoWrapper>)
                : null}
        </StyledDiv>
    )
}

export default Game