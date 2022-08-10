//set: 중복없이 유일한 값을 저장하려고 할 때 사용
// 이미 존재하는지 체크 할 때 유용
let mySet = new Set();
//console.log(toString.call(mySet));

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has("crong"));
//result:true

mySet.forEach(function(v){
    console.log(v);
    //result: crong hary
})

mySet.delete("crong");
console.log(mySet.has("crong"));
//result:false