import React from 'react';

type TopCarsComponentPropsType = {
    topCars: TopCarsPropsType[]
}
type TopCarsPropsType = {

    manufacturer: string
    model: string
}

export const TopCarsComponent = (props: TopCarsComponentPropsType) => {
    return (
        <div>
            {props.topCars.map((el) => {
                return (

                    <table key={el.manufacturer + el.model}>

                        <tr>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                   </table>
                )
            })}
        </div>

    )
}