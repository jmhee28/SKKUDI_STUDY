// ES2015 string에 새로운 메서드들

// startswith : str이 hello로 시작하는지 알 수 있는 함수
// endswith : str이 ~~로 끝나는지 알 수 있는 함수
// inlcude: str이 포함되는지 알 수 있느 함수
let str = "hello world ! ^^ ~~";
let matchstr = "hello"; 
let matchendstr = "~~";

console.log(str.startsWith(matchstr));
//result : true
console.log(str.endsWith(matchendstr));
//result : true
console.log(str.includes("world"));
//result : true