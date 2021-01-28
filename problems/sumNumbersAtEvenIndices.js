/** Sum all numbers at even indices in an array
* 
* @param {number[]} arr - The input array of numbers, with length >= 1
* @returns {number} - The sum of all numbers at even indices
*
* ex: sumNumbersAtEvenIndices([10, 5, 10, 5])
* returns: 20
* explanation: the even indices are arr[0] and arr[2]
* arr[0] is 10 and arr[2] is 10, and 10 + 10 = 20
*
* ex: sumNumbersAtEvenIndices([5, 0, 15, 0, 25, 0])
* returns: 45
*/
function sumNumbersAtEvenIndices(arr) {
    let sum = 0
    arr.forEach((elem, i) => {
        if(i % 2 === 0) {
      sum += elem
   }
})
return sum
}


console.log(sumNumbersAtEvenIndices([10, 5, 10, 5]))
console.log(sumNumbersAtEvenIndices([5, 0, 15, 0, 25, 0]))

module.exports = sumNumbersAtEvenIndices
