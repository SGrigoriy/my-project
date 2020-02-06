function reverseArray(arr) {
    var reverseArr = [];
    for(var i = arr.length; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

function reverseArrayPlace(arrey) {
    for(i = 0; i < Math.floor(arrey.length / 2); i++) {
        var res = arrey[i];
        arrey[i] = arrey[arrey.length -1 -i];
        arrey[arrey.length -1 -i] = res;
    }
    return arrey;
}


console.log(reverseArray(["A", "B", "C"]));
    var arreyValue = [1, 2, 3, 4, 5];
console.log(reverseArrayPlace(arreyValue));