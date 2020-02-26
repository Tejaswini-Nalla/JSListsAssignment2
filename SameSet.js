function areSameSets(set1, set2) {
    if(set1.length != set2.length) {
        return false;
    }
    const isElementPresent = (element) => set2.includes(element);
    return set1.every(isElementPresent);
}

function main() {
    console.log(areSameSets([1,2,3],[3,2,1]));
    console.log(areSameSets([1,2,3],[2,1,3,4]));
}

main();