// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int){
    let fareMultiplier = function(price) {
        return int * price
    }
    return fareMultiplier;
}

const fareDoubler = function(fare){
    return fare*2;
};

const fareTripler = function(fare){
    return fare*3;
};

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}

createFareMultiplier(fareDoubler(2));

