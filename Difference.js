function difference(list1, list2) {
    let elements = list2;
    return list1.filter((element) =>{
                    if(!elements.includes(element)) {
                        return element;
                    }
                    elements.splice(elements.indexOf(element),1);
    });
}

function main() {
    console.log(difference([1,2,2,3],[1,2]));
    console.log(difference([1,2,3,4],[1,2,5]));
}

main();