function union(list1, list2) {
    return list1.concat(list2);
}

function main() {
    console.log(union([1,2,3],[4,5,6]));
    console.log(union([],[1,2,3]));
    console.log(union(['a','b'],[]));
    console.log(union([],[]));
}

main();