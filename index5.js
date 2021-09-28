// //let const var

// //宣告
// function hello () {
//     console.log("你好")
// }
// function hello2 () {
//     console.log("你好2")
// }
// function hello3 () {
//     console.log("你好3")
// }

// //執行
// hello()
// hello2()
// hello3()

// function addMoney() {
//     console.log(100 + 200)
// }

// //結帳頁面

// addMoney()

// //購物車頁面
// addMoney()

// 有參數的function
//接受傳入2個參數
// function addMoney(price1, price2, discount) {
// console.log("price1", price1);
// console.log("price2", price2);
// console.log("discount", discount);
// console.log(price1 + price2 - discount)

// }

// ////結帳頁面
// addMoney(2000, 100, 50)

// //// 購物車頁面
// addMoney(3000, 200, 100)

//有回傳值的function (return)
// function addMoney(price1, price2, discount) {
//     let result = price1 + price2 - discount
//     let message = "普通會員"
//     if (result >= 50000) {
//         message = "尊榮會員"
//         return message
//     }
//     if (result >= 20000) {
//         message = "白金會員"
//         return message
//     }

    
//     return message
    
// }

// let msg = addMoney(50000, 5000, 1000)
// console.log("msg", msg)

//構造函數 function

function creatCard(name) {
    this.cardName = name
}

//new 建立或構造
// const a1 = new creatCard("小名1")
// const a2 = new creatCard("小名2")
// const a3 = new creatCard("小名3")
// const a4 = new creatCard("小名4")
// const a5 = new creatCard("小名5")
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

function hello () {}

let hello = function () {
    
}

let hello = () => {}
