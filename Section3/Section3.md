# for loop
for in의 문제점 : 자기 자신이 가지고 있지 않은 상위에 있는 추가된 값들까지 순회
                => for in을 Array에서 쓰면 안됨

for in 의 실수를 줄이기 위해 for of 가 나옴                

# spread operator 
```...``` -> 펼쳐서 보여줌
기존의 참조를 끊고 메모리의 새로운 공간에 새로운 배열로 들어간 것 (완전히 복사한 것)

# spread_operator-몇가지_활용
기존 배열에 삽입  
배열값을 parameter로 전달

# from_메서드로_진짜_배열_만들기

## arguments 

- 인자값을 명시하지 않아도 인자값이 들어왔을 때 배열형태로  

- parameter 개수가 불분명 할 때 사용  

- arguments 는 array가 아니기 때문에 map 사용 불가-> from 사용  
 ``` let newArray = Array.from(arguments); ```