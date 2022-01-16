function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return null;
    }
    return kilo * 1000;
}

// console.log(kilometerToMeter(.221));


function budgetCalculator(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return null;
    }
    return a * 50 + b * 100 + c * 500;
}
// console.log(budgetCalculator(-9,4,5));
function hotelCost(days) {
    if (days < 0) {
        return null;
    }
    if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}

// console.log(hotelCost(71));

function megaFriend(arr) {
    if(arr.length==0){
        return null;
    }
    var amount = arr.length;
    var mega_index = 0;
    var mega_size = arr[0].length;
    for (var i = 1; i < amount; i++) {
        if (arr[i].length > mega_size) {
            mega_size = arr[i].length;
            mega_index = i;
        }
    }
    return arr[mega_index]
}

// var friend_list=[];
// console.log(megaFriend(friend_list));


