import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './site/NewComponent';
import {TableComponent} from './site/TableComponent';

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const students = [
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Thomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 100},
        {id: 12, name: 'James', age: 8},
        {id: 13, name: 'Robert', age: 18},
        {id: 14, name: 'John', age: 28},
        {id: 15, name: 'Michael', age: 38},
        {id: 16, name: 'William', age: 48},
        {id: 17, name: 'David', age: 58},
        {id: 18, name: 'Richard', age: 68},
        {id: 19, name: 'Joseph', age: 78},
        {id: 20, name: 'Thomas', age: 88},
        {id: 21, name: 'Charles', age: 98},
        {id: 22, name: 'Christopher', age: 100},
    ]



    const onClickHandler=(name:string)=>{
        console.log(`Hello ${name}`)
    }



    return (
        <div className="App">
            <Header titleForHeader={'NEW Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'Ney Footer'}/>
            <NewComponent students={students}/>
            <TableComponent topCars={topCars}/>
            <button onClick={()=>onClickHandler('Vasya')}>MyYTChanel -1</button>
            <button onClick={()=>onClickHandler('Ivan')}>MyYTChanel -2</button>


            { /* <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>*/}
        </div>
    );
}

export default App;
