//function to generate an array between two integers of 1 step length.
function generateArray(n1, n2) {
    let arr = new Array();
    for (let n = n1; n<= n2; n++){
        arr.push(n);
    }
    return arr;
}

let arr = generateArray(1, 10);
console.log(arr);