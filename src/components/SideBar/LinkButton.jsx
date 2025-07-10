import React from 'react'

export const LinkButton = (props) => {
    return <div className='linkButtonContainer'>
        <div className='linkButtonIcon'>{props.icon}</div>
        <div className='linkButtonText'>{props.text}</div>
    </div>
}