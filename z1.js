function range(x, y, z) {
  var arr = [];
    if (z == undefined)
        z = 1;
    if (z >= 0) {
        for(var i = x; i <= y; i += z) {
            arr.push(i);
        }
    } else {
        for(var i = x; i >= y; i += z) {
            arr.push(i);
        }
    }
    return arr;
}
function sum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}    
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
console.log(range(1, 10, 2));

