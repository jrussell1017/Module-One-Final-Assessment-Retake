/** Sum all even numbers in an array
 * 
* @param {number[]} arr - The input array
* @returns {number} - The sum of all even numbers
*
* ex: sumEvenNumbers([1, 2, 3, 4])
* returns: 6 (because 2 + 4 = 6)
*
* ex: sumEvenNumbers([4, 3, 10])
* returns: 14
*/
function sumEvenNumbers(arr) {
    let sum = 0
  arr.forEach((num) => {
      if(num % 2 === 0)
    sum += num
  });
  return sum
}

console.log(sumEvenNumbers([1, 2, 3, 4]))
console.log(sumEvenNumbers([4, 3, 10]))


module.exports = sumEvenNumbers
