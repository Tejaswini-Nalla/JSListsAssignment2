function areEqual(list1,list2) {
    return list1.toString() === list2.toString();
}

function main() {
    console.log(areEqual([1,2,3],[1,2,3]));
    console.log(areEqual([1,4,3],[1,2,3]));
    console.log(areEqual([1,2,3],[3,2,1]));
}

main();
