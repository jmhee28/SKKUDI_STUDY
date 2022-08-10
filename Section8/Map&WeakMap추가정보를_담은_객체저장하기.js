//map & WeakMap
//Array -> set, weakset
//Object -> map, weakmap

//map: key/value

let wm = new WeakMap();
let myfun = function(){};
//이 함수가 얼마나 실행됐는지? 알려고 할 때

wm.set(myfun, 0);
console.log(wm);

// result:  
//WeakMap {ƒ => 0}
// [[Entries]]
// 0: {function(){} => 0}
// key: ƒ ()
// value: 0
// [[Prototype]]: WeakMap

for(let i =0; i <10; i++)
{
    count = wm.get(myfun); //get value
    count++;
    wm.set(myfun, count);
}
console.log(wm);
// result:  
// WeakMap {ƒ => 10}
// [[Entries]]
// 0: {function(){} => 10}
// key: ƒ ()
// value: 10
// [[Prototype]]: WeakMap

console.log(wm.get(myfun));
//result: 10

myfun = null;

console.log(wm.get(myfun));
//result : undefined

console.log(wm.has(myfun));
//result : false