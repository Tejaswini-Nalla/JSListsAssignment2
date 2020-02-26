function drop(list, numberOfElements) {
    let result = list;
    while(numberOfElements > 0) {
        result.shift();
        numberOfElements --;
    }
    return result;
}

function main() {
    console.log(drop([1,2,3,4,5],2));
}

main();