function removeElement(list, element) {
    const isElementToBeRemoved = item => item != element;
    return list.filter(isElementToBeRemoved);
}

function main() {
    console.log(removeElement([1,2,3,4,1,2],1));
    console.log(removeElement([1,2,3,4,5,5,5,5],5));
}

main();