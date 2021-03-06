function isUniqueElement(currentElement,index,list) {
    const elementOccurrences = element => element === currentElement;
    let numberOfOccurrences = list.filter(elementOccurrences).length;
    return numberOfOccurrences === 1;
}

function isDistinct(list) {
    return list.every(isUniqueElement);
}

function main() {
    console.log(isDistinct([1,2,3]));
    console.log(isDistinct([1,2,3,1]));
}

main();