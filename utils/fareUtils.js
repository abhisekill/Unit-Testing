const fareInfo = {
    initialKm: 5,
    fixedPrice: 50,
    perKm: 10,
    freeMin: 15,
    perMin: 1
}

function calculateFare(km,min){
    let fare = fareInfo.fixedPrice;
    fare += km > fareInfo.initialKm ? (km-fareInfo.initialKm)*fareInfo.perKm : 0;
    fare += min > fareInfo.freeMin ? (min-fareInfo.freeMin)*fareInfo.perMin : 0;
    return fare;
}

module.exports = {
    calculateFare,
    fareInfo
}