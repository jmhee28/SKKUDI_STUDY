var data = [1,2,undefined, NaN, null, ""];

for(var i=0; i<data.length; i++){
    console.log(i);
}
// result:
// 0
// 1
// 2
// 3
// 4
// 5

data.forEach(function(value){
    console.log("value is: ", value);
});

// result: 
// value is:  1
// value is:  2
// value is:  undefined
// value is:  NaN
// value is:  null
// value is: 



for(let idx in data){
    console.log(data[idx]);
}

// result: 
// 1
// 2
// undefined
// NaN
// null
//""

// for in의 문제점 : 자기 자신이 가지고 있지 않은 상위에 있는 추가된 값들까지 순회
// => for in을 Array에서 쓰면 안됨
Array.prototype.getIndex = function(){};

for(let idx in data){
    console.log(data[idx]);
}

// result: 
// 1
// 2
// undefined
// NaN
// null

// [Function (anonymous)]

//for in 의 실수를 줄이기 위해 for of 가 나옴
for(let value of data){
    console.log(value);
}

// result: 
// 1
// 2
// undefined
// NaN
// null

