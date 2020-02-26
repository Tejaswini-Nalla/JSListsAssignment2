function rotateLeft(list, numberOfTimes) {
    let result = list;
    while(numberOfTimes > 0) {
        let element = result.shift();
        result.push(element);
        numberOfTimes--;
    }
    return list;
}

function main() {
    console.log(rotateLeft([1,2,3,4,5],1));
    console.log(rotateLeft([1,2,3,4,5],3));
}

main();