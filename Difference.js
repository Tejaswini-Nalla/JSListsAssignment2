function difference(list1, list2) {
    let result = [];
    const isContain = function(element){
        if(!list2.includes(element)) {
            result.push(element);
        }
    }
    list1.forEach(isContain);
    return result;
}

function main() {
    console.log(difference([1,2,3],[1,2]));
    console.log(difference([1,2,3,4],[1,2,5]));
}

main();