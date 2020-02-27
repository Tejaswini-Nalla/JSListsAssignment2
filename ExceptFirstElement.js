function excludeFirstElement(list) {
    let startIndex = 1;
    return list.slice(startIndex);
}

function main() {
    console.log(excludeFirstElement([1,2,3,4]));
    console.log(excludeFirstElement([]));
}

main();