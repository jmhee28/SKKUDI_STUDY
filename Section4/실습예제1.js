function print()
{
    /*filter, includes, from을 사용해서 문자열 'e'가 포함된 
    노드로 구성된 배열을 만들어서 반환하기 */

    let arr = [];
    let newArray = Array.from(arguments);
    newArray.forEach(function(value){
       if(value.includes('e'))
       {
        arr.push(value);
       };
    });
    return arr;
}

console.log(print("apple", "orange", "banana", "strawberry"));