import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});


export const startAddExpense = (expensedata = {}) => {
    return(dispatch) => {
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
        } = expensedata;
        const expense = { description, note, amount, createdAt };
        database.ref('expense').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


// REMOVE EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


// EDIT EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
