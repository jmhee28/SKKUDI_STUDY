
// const 는 재할당 불가
// const를 기본으로 사용
// 변경이 될 수 있는 변수는 let을 사용
// var 는 사용하지 않는다.

function home(){
    var homename = 'my house';
    homename = "your house";
    console.log(homename);
}
home(); 
//result : your house

function home(){
    const homename = 'my house';
    homename = "your house";
    console.log(homename);
}
home();
//result : TypeError: Assignment to constant variable.


function home(){
    const homename = [1,2,3,3];
    homename = ["1", "2"];
    console.log(homename);
}
home();
//result : TypeError: Assignment to constant variable.