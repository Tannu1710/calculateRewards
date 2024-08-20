import { transactions } from "../data/transactionsData";

export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(transactions), 1000); //Api call delay
    });
};