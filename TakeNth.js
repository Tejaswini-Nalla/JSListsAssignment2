function extractNthElements(list, nValue) {
    const isNthElement = (element,index) => index%nValue === 0;
    return list.filter(isNthElement);
}

function main() {
    console.log(extractNthElements([1,2,3,4,5,6,7],2));
    console.log(extractNthElements([1,2,3,4,5,6,7,8,9,10,11,12],4));
}

main();