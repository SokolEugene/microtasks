import './App.css';
import React from 'react';
import {Button} from './Components/Button';

function  App() {
    const Button1Foo=(subscriber:string, age:number, adres:string)=>{
        console.log(`My name is ${subscriber} and I am ${age} and also i live in ${adres}`)
    }
    const Button2Foo=(subscriber:string, age:number,adres:string)=>{
        console.log(`My name is ${subscriber} and I am ${age} and also i live in ${adres}` )
    }
const Button3Foo=()=>{
        console.log('Be patient, I have autism')
}
    return (
        <div className="App">
            <Button name={'MyYTChanel -1'} callBack={()=>Button1Foo('Vasya', 21, 'Minsk')}/>
            <Button name={'MyYTChanel -2'} callBack={()=>Button2Foo('Ivan', 22, 'Vitebsk')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>

        </div>
    )
}



export default App;
