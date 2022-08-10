//weakSet : 참조만 가지고 있는 객체만 저장이 가능하다
// 객체가 null이나 필요가 없어지면 garbage collection 대상이 됨 -> weakset에서 없어짐
// 객체 형태를 중복 없이 저장하려고 할 때 유용하다.

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);
ws.add(function(){});

arr = null; //weakset 에서 garbage collection 대상이 됨

/*ws.add(111);
ws.add("111");
ws.add(null);*/

console.log(ws);
//result: 
// WeakSet {{…}, Array(4), ƒ, Array(4)}
// [[Entries]]
// 0:
// value: {arr: Array(4), arr2: Array(4)}
// 1: Array(4)
// value: (4) [5, 6, 7, 8]
// 2: function(){}
// value: ƒ ()
// 3: Array(4)
// value: (4) [1, 2, 3, 4]
// [[Prototype]]: WeakSet

console.log(ws.has(arr), ws.has(arr2));
//result: false true