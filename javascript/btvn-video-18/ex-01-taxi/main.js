var cost,
    fare1 = 15000,
    fare2 = 13500,
    fare3 = 11000;

const handlePriceTaxi = (distance) => {
    if (distance <= 0 || isNaN(distance || typeof distance !== "number")) {
        return "Distance must be a number and greater than 0";
    }

    if (distance > 0 && distance <= 1) {
        cost = fare1;
    } else if (distance <= 5) {
        cost = fare1 + (distance - 1) * fare2;
    } else if (distance > 5) {
        if (distance > 120) {
            cost = distance * fare3 * 0.9;
        } else {
            cost = fare1 + 4 * fare2 + (distance - 5) * fare3;
        }
    }
    return cost;
};

console.log(handlePriceTaxi(121));
