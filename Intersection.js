function intersection(list1, list2){
    let result = [];
    const isContain = function(element){
        if(list2.includes(element)) {
            result.push(element);
        }
    }
    list1.forEach(isContain);
    return result;
}

function main() {
    console.log(intersection([1,2,2,3],[2,3]));
    console.log(intersection([1,2,3],[4,5,6]));
}

main();