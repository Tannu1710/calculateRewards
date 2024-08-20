import React from "react";

const UserMonthlyRewadsTable = ({ rewards }) => (
    <table className="table table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Month</th>
                <th>Year</th>
                <th>Reward Points</th>
            </tr>
        </thead>
        <tbody>
            {rewards.map((reward,index) =>(
                <tr key={index}>
                    <td>{reward.customerId}</td>
                    <td>{reward.name}</td>
                    <td>{reward.month}</td>
                    <td>{reward.year}</td>
                    <td>{reward.points}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default UserMonthlyRewadsTable;