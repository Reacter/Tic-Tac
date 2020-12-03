import React, { useState } from 'react'
import { Wrapper } from './styled/styled'
import Game from './Game'
import Form from './Form'

const Setup = () => {
    const [settings, setSettings] = useState({
        width: 3,
        height: 3,
        winningCondition: 3
    })
    const [gameIsStarted, setGameIsStarted] = useState(false)

    return (
        <Wrapper>
            {!gameIsStarted ? (
                <Form 
                    onStart={() => setGameIsStarted(true)} 
                    setSettings={setSettings}
                    width={settings.width}
                    height={settings.height}
                    winningCondition={settings.winningCondition}/>
                )
                : <Game
                    width={settings.width}
                    height={settings.height}
                    winningCondition={settings.winningCondition}
                    startAgain={() => setGameIsStarted(false)}
                />}
        </Wrapper>
    )
}

export default Setup