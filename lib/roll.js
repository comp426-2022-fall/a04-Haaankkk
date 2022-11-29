#!/usr/bin/env node

export function roll(sides, dice, rolls) {
    var resultNums = []; //List to store the results

    for (var i = 0; i < rolls; i++) {
        var totalPts = 0; //total num in this roll
        for (var j = 0; j < dice; j++) {
            var ramdomRes = Math.floor(Math.random() * sides) + 1;
            totalPts += ramdomRes;
        }

        resultNums.push(totalPts); //put the result onto the list
    }

    const resultList = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": resultNums
    }

    return resultList;
}