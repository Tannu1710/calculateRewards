import React, { useEffect, useState } from "react";
import { logError, logSuccess } from "../logger";
import Loader from "../components/Loader";
import {CalculateRewards} from "../utils/CalculateRewards";
import {fetchTransactions} from "../services/FetchData";
import TransactionTable from "./TransactionsTable";
import MonthlyRewardsTable from "./MonthlyRewardsTable";
import TotalRewardsTable from "./TotalRewardsTable";

const RewardsDriver =() =>{
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await fetchTransactions();
                logSuccess("Data fetched successfully in Rewards Driver");
                setTransactions(data);
            } catch(error) {
                logError(error);
                setError(error.message);
            } finally {
                setLoading(false); // Ensuring loading is set to false whether the fetch succeeds or fails
            }
        };
        fetchData();
    },[]);

    if (loading) return (<Loader />);
    if(error) return (<div>Error: {error}</div>);

    const {transactionRewards,monthlyRewards,totalRewards} = CalculateRewards(transactions);

    return(
        <>
            <TransactionTable transactions={transactionRewards}/>
            <MonthlyRewardsTable rewards={monthlyRewards} />
            <TotalRewardsTable rewards={totalRewards} />
        </>
    );
};

export default RewardsDriver;