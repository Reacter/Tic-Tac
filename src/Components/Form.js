import React from 'react'
import { StyledForm } from './styled/styled'
import { useForm } from 'react-hook-form'


const Form = ({ setSettings, onStart,width,height,winningCondition }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const result = {
            width: parseInt(data.width),
            height: parseInt(data.height),
            winningCondition: parseInt(data.winningCondition)
        }
        if (result.winningCondition > result.width && result.winningCondition > result.height) {
            alert('winning condition must be greater then width or height')
            return
        }
        setSettings(result)
        onStart(true)
    }
    return (
        <StyledForm className='form' onSubmit={handleSubmit(onSubmit)}>
            <label className='label'>Width:</label>
            <input className='input' name='width' type='number' min={1} max={50} defaultValue={width} ref={register({ required: 'Required' })}></input>
            <label className='label'>Height:</label>
            <input className='input' name='height' type='number' min={1} max={50} defaultValue={height} ref={register({ required: 'Required' })}></input>
            <label className='label'>Winning Condition:</label>
            <input className='input' name='winningCondition' type='number' min={1} max={50} defaultValue={winningCondition} ref={register({ required: 'Required' })}></input>
            <button className='submitBtn' type='submit' >Submit</button>
        </StyledForm>
    )
}

export default Form
