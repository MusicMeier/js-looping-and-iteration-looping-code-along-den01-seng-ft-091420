// Code your solutions in this file
// const arrayOfNames = ["Lisa", "Kaitlin", "Jan"]
function writeCards(arrayOfNames, eventName) {
    const newArray = [];
    for(let i = 0; i < arrayOfNames.length; i++) {
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

// let countDown = 10;
// while (countDown >= 0) {
//     console.log(countDown--)
// }

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}