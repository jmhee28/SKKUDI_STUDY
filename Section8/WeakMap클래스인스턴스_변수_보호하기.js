/*function Area(height, width){
    this.height = height;
    this.width = width;
}
Area.prototype.getArea = function(){
    return this.height * this.width;
}
let myarea = new Area(10,20);

console.log(myarea.getArea());
//result : 200
console.log(myarea.height);
//10
*/

//변수를 private 하게 하기 위해 외부에 전역변수를 뽑을 수 있음
//-> WeakMap 을 이용하면 효율적임
const wm = new WeakMap(); //전역공간에 선언

function Area(height, width){ //class
    wm.set(this, {height, width});// 변수를 private 하게 
}

Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}
let myarea = new Area(10,20);

console.log(myarea.getArea());
//result : 200
console.log(myarea.height); //class 에서 생성한 객체 값을 직접 뽑을 수 없다
//undefined

console.log(wm.has(myarea));
//true
myarea = null;
console.log(wm.has(myarea));
//false