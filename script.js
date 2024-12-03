const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
];

let activeUserAverage = []

// ============= active users start
users.map((i) => {

    let total = i.scores.reduce((valOne, valTwo) => {
        return valOne + valTwo
    }, 0);

    function activeUsers() {
        if (i.isActive) {
            let average = total / i.scores.length
            i.averageScore = average
            activeUserAverage.push(average)
        }
    }
    activeUsers()
})


users.map((item) => {
    if (item.averageScore) {
        processUsers = {
            activeUsers: [item.name, item.averageScore]
        }
        // console.log(processUsers.activeUsers)
    }

    // ============= active users end
})


// ============= Top Performer Start

let topPerformerArr = users.filter((item, index, newArr) => {
    return item.averageScore
})

  let topPerformer =  topPerformerArr.map((arrItem) => {
    
        return{ PerformerName: arrItem.name, averageScore: arrItem.averageScore} 
        
    })
    
    console.log(topPerformer)

// averageArr()


// console.log(averageArr)

// let topPerformer = Math.max(averageArr)

// console.log(topPerformer)




// ============= Top Performer end





// ============= Age Group Start
let userAbove30 = users.filter((item, index, newArr) => {
    return item.age >= 30
})
let userUnder30 = users.filter((item, index, newArr) => {
    return item.age < 30
})

ageGroup = {
    under30: userUnder30,
    over30: userAbove30
}

// console.log(ageGroup)

// ============= Age Group end























// Final Output


// function processUsers() {


//     topPerformer: {boss: 50}
//     ageGroup: {
//         under30: userUnder30,
//         over30: userAbove30
//     }
// }
// console.log(processUsers)