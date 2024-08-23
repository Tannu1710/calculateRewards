import React from "react";
import ReusableTable from "../components/ReusableTable";
import 'bootstrap/dist/css/bootstrap.min.css';

const MonthlyRewardsTable = ({rewards}) => {

    const columns = ["customerId", "name", "rewardPoints"];

    return(
        <div>
            {Object.keys(rewards).map((month)=>(
                <div key={month}>
                    <h2 className='text-primary'>{month}</h2>
                    <ReusableTable columns={columns} data={rewards[month]} />
                </div>
            ))
            }
        </div>
    );
};

export default MonthlyRewardsTable;