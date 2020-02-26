function isReverse(list1, list2) {
    return list1.reverse().toString() === list2.toString();
}

function main() {
    console.log(isReverse([1,2,3],[3,2,1]));
    console.log(isReverse([3,2,1],[1,2,3]));
    console.log(isReverse([3,1,2],[1,2,3]));
    console.log(isReverse(['a','b','c'],['c','b','a']));
    console.log(isReverse(['a','b','d'],['c','b','a']));
}

main();