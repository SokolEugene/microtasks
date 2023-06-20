type TableComponentType = {
    topCars: Array<TableType>
}

type TableType = {
    manufacturer: string,
    model: string,

}


export const TableComponent = (props: TableComponentType) => {
    return (
        <table>
            {props.topCars.map((elem)=>{
                return (
                    <tr>
                        <td>{elem.manufacturer} {elem.model}</td>
                    </tr>
                )
            })}
        </table>
    )


}




