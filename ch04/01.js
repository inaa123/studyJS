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
    names.push(p.name);
}
log(names);

//상품들의 가격 수집
let prices = [];
for (const p of products) {
    prices.push(p.price);
}
log(prices);