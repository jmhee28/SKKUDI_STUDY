//... -> 펼쳐서 보여줌

let pre =["apple", "orange", 100];
let newData = [...pre]; // 기존의 참조를 끊고 메모리의 새로운 공간에 새로운 배열로 들어간 것 (완전히 복사한 것)

console.log(pre, newData);
// result : 
// [ 'apple', 'orange', 100 ] [ 'apple', 'orange', 100 ]

console.log(pre === newData);
//result : false