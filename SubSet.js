function isSubset(superSet, subSet) {
    const isElementPresent = (element) => superSet.includes(element);
    return subSet.every(isElementPresent);
}

function main() {
    console.log(isSubset([1,2,3,4],[1,2]));
    console.log(isSubset([1,2,3,4],[1,2,5]));
}

main();