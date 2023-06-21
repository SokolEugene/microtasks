import * as string_decoder from 'string_decoder';

type ButtonType ={
    name:string,
    callBack: ()=>void

}

export const Button = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}