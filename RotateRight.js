function rotateRight(list, numberOfTimes) {
    let result = list;
    while(numberOfTimes > 0) {
        let element = result.pop();
        result.unshift(element);
        numberOfTimes--;
    }
    return list;
}

function main() {
    console.log(rotateRight([1,2,3,4,5],1));
    console.log(rotateRight([1,2,3,4,5],3));
}

main();