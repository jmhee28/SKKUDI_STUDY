
function home(){
    const list = ["apple", "orange", "watermelon"];
    list = "sdfs";
}

home();
// result : TypeError: Assignment to constant variable.

// const를 사용하더라도 배열과 오브젝트 값을 변경하는 것은 가능하다.

function home(){
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
}

home();
// result : [ 'apple', 'orange', 'watermelon', 'banana' ]

//immutable array 만드는 방법
//뒤로가기, 앞으로 가기

const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);
// result : [ 'apple', 'orange', 'watermelon' ] [ 'apple', 'orange', 'watermelon', 'banana' ]

console.log(list === list2);
//result : false