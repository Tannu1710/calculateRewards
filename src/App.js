import React, { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import UserMonthlyRewadsTable from './components/UserMonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import {calculateRewards} from './utils/calculateRewards';
import { fetchData } from './utils/fetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      const transactionsWithRewards = data.map((txn) => ({
        ...txn,
        rewardPoints: calculateRewards(txn.price),
      }));
      setTransactions(transactionsWithRewards);
      setLoading(false);
    });
  }, []);

  const calculateMontlyRewards = () => {
    const grouped = transactions.reduce((acc, txn) => {
      const date = new Date(txn.date);
      const month = date.getMonth() +1; // months are 0-based
      const year = date.getFullYear();
      const key = `${txn.customerName}-${year}-${month}`;

      if(!acc[key]){
        acc[key] = {
          customerId: txn.customerName,
          name: txn.customerName,
          month: month,
          year: year,
          points: 0,
        };
      }
      acc[key].points += txn.rewardPoints;
      return acc;
    }, {});

    //Convert grouped data to array
    const monthlyRewards = Object.values(grouped).sort((a,b) => {
      if(a.year === b.year) {
        return a.month - b.month;
      }
      return a.year - b.year;
    });

    return monthlyRewards;
  };

  const monthlyRewards = calculateMontlyRewards();

  const totalRewards = monthlyRewards.reduce((acc, reward) => {
    const existing = acc.find((r) => r.customerName === reward.name);
    if(existing) {
      existing.points += reward.points;
    } else {
      acc.push({ customerName: reward.name, points: reward.points });
    }
    return acc;
  }, []);

  return(
    <div>
      {loading ? <p>Loading...</p> : (
        <>
          <h2 className='text-primary'>Transactions</h2>
          <TransactionsTable transactions={transactions} />

          <h2 className='text-primary'>User Monthly Rewads</h2>
          <UserMonthlyRewadsTable rewards={monthlyRewards} />

          <h2 className='text-primary'>Total Rewards</h2>
          <TotalRewardsTable totalRewards={totalRewards} />
        </>
      )}
    </div>
  );

};

export default App;
