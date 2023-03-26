const log = console.log;

const nums = [1, 2, 3, 4, 5]; //이 값들을 모두 더해서 하나의 값으로 만들 때  reduce사용

let total = 0;
for(const n of nums) {
    total += n; //특정 값을 순회하면서 하나의 값으로 누적할 때 reduce함수 사용.
}
log(total);

//reduce
const reduce = (f, acc, iter) => { // 함수, 누적?, 이터 받기..
    if (!iter) { //iter가 없다면 acc가 iterator일 것이다.
        iter = acc[Symbol.iterator](); //acc의 Symbol.iterator를 실행하여 이터러블값을 이터레이터로 변환한다.
        acc = iter.next().value; //acc의 값은 iter의 첫번째 값. 
        // 그러면 [1,2,3,4,5]이터러블을 이터레이터로 만들고 첫번째값(1)을 next로 꺼내 acc로 옮긴다.(2,3,4,5는 iter에 남아있다)
    }
    for (const a of iter) {
        acc = f(acc , a); // 더하기 연산을 보조함수에게 위임하여 계속 누적해야하는 값(acc)과 이번에 사용해야할 값(a)을 준다.
    }
    return acc;
};

// reduce사용하는 법? 외부인터페이스?살펴보기
const add = (a, b) => a + b; //a와b를 더하는 add함수
log(reduce(add, 0, [1, 2, 3, 4, 5]));  //reduce(함수, 시작값?기본값?누적할값?, [])
log(add(add(add(add(add(0, 1), 2), 3),4), 5)) //위에가 이렇게 하나의 값으로.... 실행된다. reduce의 내부가 이렇게 재귀적으로 실행되도록

//자바스크립트에선 acc 값 없이 사용할 수 있게 reduce가 구현되어 있다. 
log(reduce(add, [1, 2, 3, 4, 5])); //(시작하는 값 생략한 경우) 내부적으로 reduce가 아래처럼 변경한다.
// log(reduce(add, 1, [2, 3, 4, 5])); 이처럼 첫값을 꺼내서 기본값으로 변경한다.
// reduce(add, [1, 2, 3, 4, 5])) 경우에도 15값이 출력되기 하기 위해 reduce함수 if문 추가한다.

//reduce2
/*reduce 같은 경우에 보조함수를 통해 어떻게 축약할지 완전히 위임하기 때문에 단순히 아까 사용한 숫자가 들어간 배열외에도 
복잡한형태의 데이터(ex) key value있는 products같이)역시 특정한 값으로 축약도 가능하다.*/
const products = [
    { name : '일', price: 100 },
    { name : '이', price: 200 },    
    { name : '삼', price: 300 },
    { name : '사', price: 400 },
    { name : '오', price: 500 }
];
// products의 price를 다 더하는 코드를 reduce로 작성
log(
    reduce(
    (total_price, product) => total_price + product.price, 
    0, 
    products));