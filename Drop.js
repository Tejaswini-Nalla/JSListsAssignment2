function drop(list, numberOfElements) {
    return list.slice(numberOfElements);
}

function main() {
    console.log(drop([1,2,3,4,5],2));
}

main();