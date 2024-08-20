export const calculateRewards = (price) => {
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