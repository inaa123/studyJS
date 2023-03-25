const log = console.log;

const products = [
    { name : '일', price: 100 },
    { name : '이', price: 200 },    { name : '삼', price: 300 },
    { name : '사', price: 400 },
    { name : '오', price: 500 }
];

//상품들의 이름 수집
let names = [];
for (const p of products) {
    names.push(p.name); //어떤값을 수집할지 직접 코딩함. 수집하는게 name이면 name, price면 price
}
log(names);

//상품들의 가격 수집
let prices = [];
for (const p of products) {
    prices.push(p.price);
}
log(prices);

//map
const map = (f, iter) => { 
    let res = [];
    for (const a of iter) {
        res.push(f(a)); //어떤 값을 수집하냐, 직접적지x map함수는 추상화한다. 함수를 받아서 어떤 값을 수집할지
    }
    return res;
};

//map함수를 이용해서 names와 prices를 뽑기
map(p => p.name, products);

log('------------------------------------------');
//[이터러블 프로토콜을 따른 map의 다형성]
