const log = console.log;

const products = [
    { name : '일', price: 100 },
    { name : '이', price: 200 },    { name : '삼', price: 300 },
    { name : '사', price: 400 },
    { name : '오', price: 500 }
];
//filter는 특정 금액 이하의 상품 걸러내기 등

let under200 = [];
for(const p of products) {
    if (p.price < 200) under200.push(p);
}
log(under200);

let over200 = [];
for(const p of products) {
    if (p.price >= 200) over200.push(p);
}
log(over200);

//refactoring 리팩토링
const filter = (f, iter) => { //filter라는 함수가 있으면 filter = () => {}. // 어떤 값이든 받을 수있게 이터러블 프로토콜을 따른다 = iter. //
    let res = [];
    for(const a of iter) {
        if (f(a)) res.push(a); // 어떤 조건일때 걸러서 푸쉬할지 함수(f)를 받아서(24번줄에서 f) 보조함수에게(27번줄 f(a)) 위임한다.\)
    }
    return res; //return하는 값은 함수의 리턴값을 출력?
};
//내부의 값이 key value로 구분됭 상품
log(...filter(p => p.price < 300, products)); //filter를하면서 상품을받아서(p => ) if문 안쪽에서 평가되도록 보조함수를 작성한다(> p.price < 300)

//내부의 값이 [1,2,3,4]이렇게 들어있을때도 걸러낼 수 있음!
log(filter(n => n % 2, [1, 2, 3, 4])); 
//내부의 값의 다형성은 보조함수를 통해서 지원해준다. 외부의?? 경우는 이터러블 프로토콜을 따르는 것을 통해서 다형성을 지원해준다.

log(filter(n => n % 2, function* () { 
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}() ));
//filter역시 이터러블 프로토콜을 따른다.