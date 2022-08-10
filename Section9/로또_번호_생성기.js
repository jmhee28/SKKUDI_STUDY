const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
}

let { name: name, count: count, maxNumber: maxNumber } = SETTING;
let mySet = new Set();

function getRandomNumber(maxNumber) {

    //랜덤한 유일한 숫자 값을 추출
    let min = 0;
    for (let i = 0; i < count; i++) {
        let randNum = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
        if (mySet.has(randNum)) {
            i--;
        }
        else {
            mySet.add(randNum);
        }
    }

    
}
getRandomNumber(maxNumber);
console.log(mySet.values());