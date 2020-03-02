function isElementPresent(element) {
    return !this.includes(element);
}

function difference(list1, list2) {
    return list1.filter(isElementPresent,list2);
}

function main() {
    console.log(difference([1,2,3],[1,2]));
    console.log(difference([1,2,3,4],[1,2,5]));
}

main();