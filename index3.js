// IF 的用法

// true or false
// let condition = 100 < 50
// console.log("condition", condition)

// + - * / 算術運算子
// && || ! 邏輯運算子

// && 兩邊都是true 結果才是true (and)
// || 兩邊只要有一邊是true 結果就是true (or)

// ! 把結果反向


// let condition = false && false
// console.log("condition", condition)

// let condition = true || false
// console.log("condition", condition)

// let condition = !true
// console.log("condition", condition)
// let condition = ! (true && false)
// console.log("condition", condition)


// if (condition){
//     //條件成立要做的事情
//     console.log("確實大於50")
// } else{
//     //沒有成立要做的事情
//     console.log("錯誤")
// }

let scoreA = 100
let scoreB = 99
let condition = scoreA === scoreB
// > < >= <= === !==

// if (scoreA > scoreB) {
//     console.log("A考得比較高分")
// } else {
//     console.log("B考得比較高分")
// }

// let score = 65

// if (score >= 100) {
//     console.log("好棒棒")
// } else if (score > 70) {
//     console.log("再加油")
// } else if (score > 60) {
//     console.log("下次小心點")
// } else{
//     console.log("去補修!")
// }

// switch case

let key = 999
switch (key)  {
    case 100:
        console.log("考了100")
        break;
    case 200:
        console.log("考了200")
        break;
    case 300:
        console.log("考了300")
        break;
    default:
        console.log("沒去考試")
        break;
}