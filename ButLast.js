function excludeLastElement(list) {
    let result = list;
    result.pop();
    return result;
}

function main() {
    console.log(excludeLastElement([1,2,3,4]));
    console.log(excludeLastElement([]));
}

main();