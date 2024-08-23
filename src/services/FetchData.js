import data from '../data/data.json';
import { logError, logSuccess } from '../logger';

export const fetchTransactions = async () => {
  const delay = Math.random() * 2000 + 500; // Dynamic delay between 500ms to 2500ms

  try {   
    // Simulating dynamic delay
    return new Promise((resolve) => {
      setTimeout(() => {
        logSuccess("Data fetched successfully");
        resolve(data.transactions);
      }, delay);
    });
  } catch (error) {
    logError(error);
    throw error; // Rethrow to be caught in the component
  }
};
