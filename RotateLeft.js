function rotateElement(element, index, list) {
    let newIndex = (index + this)%list.length;
    return list[newIndex];
}

function rotateLeft(list, numberOfTimes) {
    let rotatedElements = list.map(rotateElement, numberOfTimes);
    return rotatedElements;
}

function main() {
    console.log(rotateLeft([1,2,3,4,5],1));
    console.log(rotateLeft([1,2,3,4,5],3));
}

main();