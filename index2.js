//陣列 Array
let c1 = "小名"
//..........
let c30 = "小白"

let classA = ["小名", "小白", "小華", "小華", "小華", "小華"]
console.log("轉學前:", classA)
classA.push("小黃")//新增
console.log("轉學後:", classA)

let igPhotos = [
    "https://xx.img.com/a1.png",
    "https://xx.img.com/a1.png",
    "https://xx.img.com/a1.png"
]

console.log("第一筆", igPhotos[0]) //index = 0
console.log("第二筆", igPhotos[1])
console.log("第三筆", igPhotos[2])
console.log("第三筆", igPhotos[3])
//TODO del
console.log("igPhotos", igPhotos)
//長度
//TODO del
console.log(classA.length)
console.log("igPhotos length", igPhotos.length)


//物件 Object
const card = {
    name: "百六的前端名片",
    address: "第七天堂",
    age: 999,
}

//TODO del
console.log("名字", card.name) //. => card的name

const post = {
    image:  "https://xx.img.com/a1.png",
    desc: "這是一張圖片",
    date: "2022/02/02",
    comment: ["beautiful", "I also wanna go"]
}
const post2 = {
    image:  "https://xx.img.com/a2.png",
    desc: "這是一張圖片",
    date: "2022/02/02",
    comment: ["sucks", "disqusting", "shame"]
}



const wall = [
    post,
    post,
    post,
    post,
    post2
]

// TODO del
console.log("wall", wall)