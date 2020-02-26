function excludeFirstElement(list) {
    let result = list;
    result.shift();
    return result;
}

function main() {
    console.log(excludeFirstElement([1,2,3,4]));
    console.log(excludeFirstElement([]));
}

main();