export const CalculateRewards = (transactions) => {

    //sort the transactions by date in descending order
    const sortedTransactions = transactions.sort((a,b) => new Date(b.date) - new Date(a.date));

    //use new Set() to create a unique list of month-year combinations
    const uniqueMonths = [
        ...new Set(sortedTransactions.map((transaction) =>{
            return new Date(transaction.date).toLocaleString("default",{month:"long", year:"numeric"});
        }))
    ];

    //slice the first three elements from the sorted array to get last three consecutive months
    const lastThreeMonths = uniqueMonths.slice(0,3);

    const transactionRewards = [];
    const monthlyRewards = {};
    const totalRewards = {};

    // Iterate over each transaction using map
    sortedTransactions.map((transaction)=>{
        const customerId = transaction.customerId;
        const name = transaction.name;
        const date = transaction.date;
        const price = transaction.price;

        // Calculate the reward points for this transaction
        const rewardPoints = CalculatePoints(price);

        transactionRewards.push({...transaction,rewardPoints});

        // Get the month and year from the date (e.g., "January 2024")
        const month = new Date(date).toLocaleString("default",{month:"long", year:"numeric"});

        //only process those that belong to one of the last three months
        if(lastThreeMonths.includes(month)) {
            // Initialize the month if it doesn't exist in monthlyRewards
            if(!monthlyRewards[month]){
                monthlyRewards[month] = [];
            }
            // Push the reward data for this customer in the current month
            monthlyRewards[month].push({customerId,name,rewardPoints});
        }

        // Add reward points to the total rewards for the customer
        if(!totalRewards[name]){
            totalRewards[name] = 0;
        }
        totalRewards[name] += rewardPoints;

        // Since map requires a return value, we'll return null or undefined
        return null;

    });

    return {transactionRewards,monthlyRewards,totalRewards};
    
};

// Function to calculate reward points based on the price
export const CalculatePoints = (price) => {
    let points = 0;
    if(typeof(price) !== 'number' || isNaN(price)){
        return 0;
    }
    if(price > 50 && price <= 100){
        points = Math.round(price-50);
    } else if(price > 100){
        points = Math.round((price-100) * 2 + 50);
    }
    return points;
};