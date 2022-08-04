
//1. 기존 배열에 삽입
let pre = [100, 200, "hello", null];

let newData = [0,1,2,3,...pre,4];

console.log(newData);

//result: [ 0, 1, 2, 3, 100, 200, 'hello', null, 4 ]

// 2. Parameter로 전달
function sum(a,b,c)
{
    return a+b+c;
}

let pre2 = [100, 200, 300];

console.log(sum.apply(null, pre2)); 
// result: 600
console.log(sum(...pre2));
// result: 600