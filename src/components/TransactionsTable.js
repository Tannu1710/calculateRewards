import React from 'react';

const TransactionsTable = ({ transactions }) => (
    <table className="table table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Transaction ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Product</th>
                <th>Price</th>
                <th>Reward Points</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customerName}</td>
                <td>{item.date}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.rewardPoints}</td>
                </tr>
            ))}
      </tbody>
    </table>
);
export default TransactionsTable;