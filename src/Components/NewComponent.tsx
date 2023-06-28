import React from 'react';

type NewComponentPropsType = {
    //students: Array<StudentPropsType> // один из пособов протипизировать массив
    students: StudentsPropsType[]

}
type StudentsPropsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {


    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArr, index) => {
                    return (
                        <li key={objectFromStudentArr.id}>
                            <span>{objectFromStudentArr.name}</span>
                            <span>{objectFromStudentArr.age}</span>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}