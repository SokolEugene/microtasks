import './App.css';
import React, {useState} from 'react';

// import {Button} from './Components/Button';

function App() {
    /*  const Button1Foo=(subscriber:string, age:number, adres:string)=>{
          console.log(`My name is ${subscriber} and I am ${age} and also i live in ${adres}`)
      }
      const Button2Foo=(subscriber:string, age:number,adres:string)=>{
          console.log(`My name is ${subscriber} and I am ${age} and also i live in ${adres}` )
      }
  const Button3Foo=()=>{
          console.log('Be patient, I have autism')*/

//let a = 1;
    let[a, setA]=useState(0)
const onClickHandler = () => {
    setA(++a);
    console.log(a)
}

const onClickHandler1 = () => {
    setA(0);
    console.log(a)

}
return (
    <div className="App">
        {/*<Button name={'MyYTChanel -1'} callBack={()=>Button1Foo('Vasya', 21, 'Minsk')}/>
            <Button name={'MyYTChanel -2'} callBack={()=>Button2Foo('Ivan', 22, 'Vitebsk')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>*/}
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandler1}>0</button>
    </div>
)
}

export default App;
