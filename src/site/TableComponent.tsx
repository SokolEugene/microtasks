type TableComponentType = {
    topCars: Array<TableType>
}

type TableType = {
    manufacturer: string,
    model: string,
   /* index?: number,*/
}
export const TableComponent = (props: TableComponentType) => {
    return (
        <table>
            <tbody>
            {props.topCars.map((elem) => (
                <tr key={elem.manufacturer+elem.model}>
                    <td>{elem.manufacturer} {elem.model}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
