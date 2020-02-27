function excludeLastElement(list) {
    let endIndex = list.length - 1;
    return list.slice(0,endIndex);
}

function main() {
    console.log(excludeLastElement([1,2,3,4]));
    console.log(excludeLastElement([]));
}

main();