

const calculate = (xPlus,yPlus,{winningCondition, k, i, board, moveNumber}) =>{
    const x = k
    const y = i
    const winner = moveNumber % 2 === 0 ? 'X' : 'O'
    const winningCoordinates = [[y, x]]
    const result = { winner: winner, winningCoordinates: winningCoordinates }
    let streak = 0
    
    for (let i = 1; i < winningCondition; i++) {
        if (board[y + yPlus*i]) {
            if (board[y + yPlus*i][x + xPlus*i]) {
                if (board[y + yPlus*i][x + xPlus*i] === board[y][x]) {
                    streak++
                    winningCoordinates.push([y + yPlus*i, x + xPlus*i])
                    if (streak + 1 === winningCondition)
                        return result
                }
                else break
            }
        }
    }
    
    for (let i = 1; i < winningCondition; i++) {
        if (board[y - yPlus*i]) {
            if (board[y - yPlus*i][x - xPlus*i]) {
                if (board[y - yPlus*i][x - xPlus*i] === board[y][x]) {
                    streak++
                    winningCoordinates.push([y - yPlus*i, x - xPlus*i])
                    if (streak + 1 === winningCondition)
                        return result
                }
                else break
            }
        }
    }
}

const calculateLeftDiagonal = (boardInfo) => {
    return calculate(1,-1,boardInfo)
}

const calculateRigthDiagonal = (boardInfo) => {
    return calculate(1,1,boardInfo)
}

const calculateColumn = (boardInfo) => {
    return calculate(0,1,boardInfo)
}

const calculateRow = (boardInfo) => {
    return calculate(1,0,boardInfo)
}

export const calculateWinner = (boardInfo) => {
    if (boardInfo.winningCondition === 1)
        return { winner: 'X', winningCoordinates: [[boardInfo.i, boardInfo.k]] }

    return calculateRow(boardInfo)
        || calculateColumn(boardInfo)
        || calculateRigthDiagonal(boardInfo)
        || calculateLeftDiagonal(boardInfo)
}