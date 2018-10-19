
const getExpensesTotal = (expenses) => {
    let total = 0;
    expenses.map((expense)=>{
        total = total + expense.amount;
    });
    return total;
};

export default getExpensesTotal;