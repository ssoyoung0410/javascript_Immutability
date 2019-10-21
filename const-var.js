// function fn (person) {
//     person = Object.assign({},person);
//     person.name = 'lee';
//     return person;
// }

// var o1 = {name:'kim'};
// var o2 = fn(o1);
// console.log(o1,o2);

// function fn (person) {
//     person.name = 'lee';
// }

// var o1 = {name:'kim'};
// var o2 = Object.assign({},o1);
// fn(o2);
// console.log(o1,o2);

// var score = [1,2,3];
// var score2 = score.concat(4); //immutable 유지 score의 배열을 복사하여 새 배열 만들고, 그 새로만든 배열에 값을 추가 . 
// console.log(score,score2); // [1,2,3,4]


// var o1 = {name:'kim', score:[1,2]}
// Object.freeze(o1);
// o1.name = 'lee'; //Object.freeze를 하였기때문에 o1.name은 lee 로 바뀌지 않고 여전히 kim이다.
// console.log(o1);

const o1 = {name:'kim'};
Object.freeze(o1);
const o2 = {name:'kim'};
//o1 = o2;
o1.name = 'park';
console.log(o1);
