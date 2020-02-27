function isElementPresent(element) {
    return this.includes(element);
}

function intersection(list1, list2){
    return list1.filter(isElementPresent,list2);
}

function main() {
    console.log(intersection([1,2,2,3],[2,3]));
    console.log(intersection([1,2,3],[4,5,6]));
}

main();