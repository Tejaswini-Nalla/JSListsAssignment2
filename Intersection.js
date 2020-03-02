function intersection(list1, list2){
    let elements = list2;
    return list1.filter((element) =>{
                            if(elements.includes(element)) {
                                elements.splice(elements.indexOf(element),1);
                                return element;
                            }
                            });
}

function main() {
    console.log(intersection([1,2,2,3],[2,3,2,6]));
    console.log(intersection([1,2,3],[4,5,6]));
}

main();