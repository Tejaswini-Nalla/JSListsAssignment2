function extract(list, numberOfElements) {
    return list.slice(0,numberOfElements);
}

function main() {
    console.log(extract([1,2,3,4,5,6,7],4));
}

main();