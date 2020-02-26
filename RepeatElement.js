function repeat(element, repeatCount) {
    let result = [];
    while(repeatCount > 0) {
        result.push(element);
        repeatCount--;
    }
    return result;
}

function main() {
    console.log(repeat('a',5));
}

main();