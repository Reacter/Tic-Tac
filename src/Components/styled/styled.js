import styled from 'styled-components'


export const StyledButton = styled.button`
    width: 100%;
    background-color:${({ winner }) => winner ? 'green' : '#10106e'};
    color:${({ value }) => value === 'X' ? 'red' : '#c1d113'};
    pointer-events:${({ disabled }) => disabled ? 'none' : 'auto'};
    opacity:${({ disabled, winner }) => disabled && !winner ? 0.3 : 1};
    width: calc(100%/${({ width }) => width});
    height: 0;
    padding-top: calc(100%/${({ width }) => width});
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    p {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size:calc(500px/${({width})=>width});
    }
    border: 1px solid #999;
`

export const StyledBoard = styled.div.attrs((props) => ({
    width: props.width,
    height: props.height,
    disabled: props.disabled
}))`
    margin: 40px auto;
    width: 50%;
    display: flex;
    align-content: flex-start;
    flex-flow: row wrap;
  `
export const Wrapper = styled.div`
    height:900px;
    width:100%;
`
export const StyledForm = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
.label{
    color:#edd3dc;
    font-style:normal;
    margin-bottom:20px;
    margin-top:10px;
    font-size:18px;
}
.input{
    width:10%;
    height:30px;
    border:2px;
    padding:0;
    text-align-last:center;
    font-size:16px;
    border-radius:6px;
}
.submitBtn{
    background-color:#998585;
    width:5%;
    height:40px;
    margin-top:50px;
    border-radius:6px;
    font-size:16px;
    &:hover{
        background-color: #695555;
    }
}
`
export const InfoWrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-flow:column;
    align-items:center;
    
`

export const StyledRematchBtn = styled.button`
    background-color:#161652;
    color:white;
    font-size:40px;
    cursor:pointer;
    margin-right:200px;
    position:sticky;
    top:250px;
`
export const StyledResult = styled.div`
    color:white ;
    font-size:40px;
    margin-right:200px;
    margin-bottom:50px;
    margin-top:100px;
    position:sticky;
    top:100px;
    
`
export const StyledDiv = styled.div`
    display:flex;
    justify-content:flex-end;

`