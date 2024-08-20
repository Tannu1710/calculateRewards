import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TotalRewardsTable = ({ totalRewards }) => (
    <table className="table table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Customer Name</th>
                <th>Total Reward Points</th>
            </tr>
        </thead>
        <tbody>
            {totalRewards.map((reward, index) => (
                <tr key={index}>
                    <td>{reward.customerName}</td>
                    <td>{reward.points}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TotalRewardsTable;