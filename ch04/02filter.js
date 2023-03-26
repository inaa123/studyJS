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
const filter = (iter) => { //filter라는 함수가 있으면 filter = () => {}. // 어떤 값이든 받을 수있게 이터러블 프로토콜을 따른다 = iter. //
    let res = [];
    for(const a of iter) {
        if (a.price < 200) res.push(a); // 어떤 조건일때 걸러서 푸쉬할지 함수(f)를 받아서(24번줄에서) 보조함수에게(27번줄) 위임한다.\)
    }
    return res; //return하는 값은 함수의 리턴값을 출력?
};