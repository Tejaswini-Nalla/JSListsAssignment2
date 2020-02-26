function frequencyOfElement(list, element) {
    const elementOccurrences = currentElement => currentElement === element;
    let numberOfOccurrences = list.filter(elementOccurrences).length;
    return numberOfOccurrences;
}

function main() {
    console.log(frequencyOfElement([1,2,3,1,1,11,2,3,4,4],1));
    console.log(frequencyOfElement([1,2,3,1,1,11,2,3,4,4],10));
}

main();