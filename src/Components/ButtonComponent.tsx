import React from 'react';


type ButtonProps = {
    nameButton: string
    callback: () => void
}

export const ButtonComponent = (props: ButtonProps ) => {
    return (
        <button onClick={()=> props.callback()}>{props.nameButton}</button>
    )
}
