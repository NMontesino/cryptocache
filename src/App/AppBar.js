import React from 'react'
import styled, { css } from 'styled-components'


const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

const ControlButtonElement = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #03ff03;
    `}
`


const toProperCase = (lower) =>
{
    return `${lower.charAt(0).toUpperCase()}${lower.substr(1)}`
}

const ControlButton = ({name, active}) =>
{
    return (
        <ControlButtonElement active={ active }>
            {toProperCase(name)}
        </ControlButtonElement>
    )
}


export default () => 
{
    return (
        <Bar>
            <Logo>Crypto Cache</Logo>
            <div/>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>
    )
}