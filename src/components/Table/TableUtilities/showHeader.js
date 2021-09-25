export const showHeader = (currentState, ColumnHeader) => {
    return Object.entries(ColumnHeader).map((Columns, index) => {
        if (Object.keys(currentState.hiddenColumns).find(key => key === Columns[0]) === undefined) {
            return <td key={"thead_" + index + Columns[1][0]}>{Columns[1][0]}</td>
        }
        else 
            return null;
    });
}