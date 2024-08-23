import React from "react";
import ReusableTable from "../components/ReusableTable";
import 'bootstrap/dist/css/bootstrap.min.css';

const TotalRewardsTable = ({rewards}) => {
    const columns = ["name", "rewardPoints"];
    const data = Object.keys(rewards).map((name)=>({name, rewardPoints: rewards[name]}));

    return(
        <div>
            <h2 className='text-primary'>Total Rewards</h2>
            <ReusableTable columns={columns} data={data} />
        </div>
    );

};

export default TotalRewardsTable;