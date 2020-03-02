function excludeLastElement(list) {
    return list.slice(0,list.length - 1);
}

function main() {
    console.log(excludeLastElement([1,2,3,4]));
    console.log(excludeLastElement([]));
}

main();