
// https://github.com/minhaz265/assignmentJS_wave2

function kilometerToMeter(num){
    if(num < 0){
        return "invalid input"
    }
    return (num * 1000);
}
// var result = kilometerToMeter(1.5);
// console.log(result);

function budgetCalculator(watch, mobile, laptop){
    var total = watch*50 + mobile*100 + laptop*500;
    return total;
}
// var result2 = budgetCalculator(1,1,1);
// console.log(result2);
function hotelCost(numberOfDays){
    var rent = 0;
    if(numberOfDays > 20){
        rent = 10*100 + 10*80 + (numberOfDays - 20)*50;
        return rent;
    }
    else if(numberOfDays > 10){
        rent = 10*100 + (numberOfDays - 10)*80;
        return rent;
    }
    else if(numberOfDays < 11){
        rent = numberOfDays*100;
        return rent;
    }
    else{
        return "invalid input"
    }
}
// var result3 = hotelCost(9);
// console.log(result3);
function megaFriend(inputArray){
    var max = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        if(inputArray[i].length > max.length){
            max = inputArray[i]
        }
    }
 return max;
}
// var result4 = megaFriend(["ami","tumi", "minhaz"]);
// console.log(result4);

