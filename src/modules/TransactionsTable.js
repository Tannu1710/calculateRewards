import React from "react";
import ReusableTable from "../components/ReusableTable";
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionsTable = ({transactions}) =>{
    const columns = ['customerId', 'name', 'date', 'product', 'price', 'rewardPoints'];

    return(
        <div>
            <h2 className='text-primary'>Transactions Table</h2>
            <ReusableTable columns = {columns} data={transactions} />
        </div>
    );

};

export default TransactionsTable;