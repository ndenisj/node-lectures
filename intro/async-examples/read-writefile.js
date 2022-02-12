const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/third.txt',`THIS IS THIRD: ${first} - ${second}`, {flag: 'a'})
        console.log(first, second)

    } catch (error) {
        console.log(error);
    }
}

start()

// 2 WAY
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
    
// const start = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8')
//         const second = await readFilePromise('./content/second.txt', 'utf-8')
//         await writeFilePromise('./content/third.txt',`THIS IS THIRD: ${first} - ${second}`)
//         console.log(first, second)

//     } catch (error) {
//         console.log(error);
//     }
// }

// start()


// 1 WAY
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8',(err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }

//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second)

//     } catch (error) {
//         console.log(error);
//     }
// }

// start()