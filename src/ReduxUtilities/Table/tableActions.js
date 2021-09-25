const changeColumnStates = (ColumnName) => {
    return {
        type: 'CHANGE_COLUMN_STATE',
        ColumnName 
    }
}

const applyChanges = () => {
    return {
        type: 'APPLY_CHANGES'
    }
}

export {changeColumnStates, applyChanges};