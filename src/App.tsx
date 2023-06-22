import './App.css';
import React, {useState} from 'react';
import {ButtonComponent} from './Components/ButtonComponent';

export type FilterType='All' | 'Rubles' | 'Dollars'

type Currency = {
    banknots: string
    value: number
    number: string
}


function App() {

    const [money, setMoney] = useState<Currency[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const[filter, setFilter]=useState<FilterType>('All');

    let currentMoney = money;

    if (filter==='Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')

    } if (filter==='Rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }
    const onClickFilteredHandler = (filter: FilterType) => {
       setFilter(filter)
    }
    return (
        <>


             <ul>
                {currentMoney.map((objFromMoneyArr, index)=>{
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
                <div style={{marginLeft: '45px'}}>
                   {/* <button onClick={()=> onClickFilteredHandler('All')}>All</button>
                    <button onClick={()=> onClickFilteredHandler('Rubles')}>Rubles</button>
                    <button onClick={()=> onClickFilteredHandler('Dollars')}>Dollars</button>*/}

                    <ButtonComponent nameButton={'show all'} callback={() => onClickFilteredHandler('All')}/>
                    <ButtonComponent nameButton={'show dollars'} callback={() => onClickFilteredHandler('Dollars')}/>
                    <ButtonComponent nameButton={'show rubles'} callback={() => onClickFilteredHandler('Rubles')}/>
                </div>
            </ul>
        </>

    )
}

export default App;
