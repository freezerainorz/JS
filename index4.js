// For 迴圈
// i++ => i = i + 1
// i+=2 => i = i+2

// let a = 10
// a += 20
// console.log("a", a
// )
// for (let i = 0; i < 10;  i+=2) {
//     console.log('i:', i)
// }

//3人班級
// 0 1 2 -> classA的index
// let classA = [100, 70 , 59]
//     console.log(classA[0])
//     console.log(classA[1])
//     console.log(classA[2])
//     console.log(classA[3])
// classA.push(40)
// console.log("classA", classA)
// for (let i = 0; i < classA.length; i++) {
//     console.log("i:", classA[i])
// }

// for (let i = 0; i < classA.length; i++) {
//     if (i ===2) {
//         classA[i] = 999
//     }
    
// }
// console.log( "classA", classA)

//[物件一, 物件二......]

const posts = [
    {
        name: 'alex',
        desc: 'post1'
    },
    {
        name: 'lily',
        desc: 'post2'
    },
    {
        name: 'CTW',
        desc: 'post3'
    }
]
for (let i = 0; i < posts.length; i++) {
    if (i ===1) {
        let post = posts[i]
        console.log(post)
    }

}


//While迴圈
let condition = true
let target = 10
let i = 0

while (condition) {
    if (i === target) {
        condition = false
    }
    console.log(i)
    i++
}