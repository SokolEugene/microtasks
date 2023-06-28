import './App.css';
import {useState} from 'react';
/*import FullInput from './Components/FullInput';
import {NewComponent} from './Components/NewComponent';*/
import {Button} from './Components/Button';
import {Input} from './Components/Input';

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])

    let[title, setTitle]=useState('')
    console.log(title)

    const addMessage = (title: string)=>{
        let newMessage={message: title}
        setMessage([newMessage,...message])
    }
    const callBackButtonHandler =() =>{
        addMessage(title);
        setTitle('')
    }

    return (
        <div className="App">
            {/* <div>
                <input />
                <button>+</button>
            </div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
