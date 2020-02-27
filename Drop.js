function drop(list, numberOfElements) {
    let startIndex = numberOfElements;
    return list.slice(startIndex);
}

function main() {
    console.log(drop([1,2,3,4,5],2));
}

main();